import { setTimeout } from "node:timers";
import type {
	APIEmbed,
	APIGuildMember,
	APIGuildTextChannel,
	GatewayMessageUpdateDispatchData,
	GuildTextChannelType,
	WithIntrinsicProps,
} from "@discordjs/core";
import { AuditLogEvent, GatewayDispatchEvents, MessageType, RESTJSONErrorCodes } from "@discordjs/core";
import { DiscordAPIError } from "@discordjs/rest";
import EventHandler from "../../../lib/classes/EventHandler.js";
import type ExtendedClient from "../../../lib/extensions/ExtendedClient.js";
import { DiscordSnowflake } from "@sapphire/snowflake";

export default class MessageDelete extends EventHandler {
	public constructor(client: ExtendedClient) {
		super(client, GatewayDispatchEvents.MessageDelete);
	}

	/**
	 * Message was deleted
	 *
	 * https://discord.com/developers/docs/topics/gateway-events#message-delete
	 */
	public override async run({ data: message }: WithIntrinsicProps<GatewayMessageUpdateDispatchData>) {
		if (message.author?.bot || (message.type && [MessageType.ThreadCreated].includes(message.type))) return;

		const [oldMessage] = await this.client.prisma.$transaction([
			this.client.prisma.message.findUnique({
				where: {
					id: message.id,
				},
			}),
			this.client.prisma.message.deleteMany({
				where: {
					id: message.id,
				},
			}),
		]);

		if (!oldMessage) return;

		const authorId = oldMessage?.authorId ?? message.author?.id ?? null;

		const loggingChannels = await this.client.prisma.logChannel.findMany({
			where: {
				event: "MESSAGE_DELETED",
				guildId: message.guild_id!,
			},
		});

		if (!this.client.channelNameCache.has(message.channel_id)) {
			try {
				const channel = (await this.client.api.channels.get(
					message.channel_id,
				)) as APIGuildTextChannel<GuildTextChannelType>;

				this.client.channelNameCache.set(message.channel_id, channel.name);
				setTimeout(() => this.client.channelNameCache.delete(message.channel_id), 30_000);
			} catch (error) {
				if (error instanceof DiscordAPIError && error.code === RESTJSONErrorCodes.UnknownChannel)
					this.client.channelNameCache.set(message.channel_id, "unknown-channel");
				else throw error;
			}
		}

		const channelName = this.client.channelNameCache.get(message.channel_id);

		const member = await this.client.api.guilds.getMember(message.guild_id!, authorId);
		let deletedBy: APIGuildMember | null = null;

		const auditLogResponse = await this.client.api.guilds.getAuditLogs(message.guild_id!, {
			action_type: AuditLogEvent.MessageDelete,
		});

		const possibleMatches = auditLogResponse.audit_log_entries.filter(
			(auditLogEntry) =>
				auditLogEntry.target_id === member.user!.id && auditLogEntry.options?.channel_id === message.channel_id,
		);

		const mostRecentMatch = possibleMatches.length
			? possibleMatches.reduce((previous, current) =>
					Math.abs(Date.now() - DiscordSnowflake.timestampFrom(current.id)) <
					Math.abs(Date.now() - DiscordSnowflake.timestampFrom(previous.id))
						? current
						: previous,
				)
			: undefined;

		if (mostRecentMatch) {
			const timeDifference = Math.abs(Date.now() - DiscordSnowflake.timestampFrom(mostRecentMatch.id));
			const count = Number.parseInt(mostRecentMatch.options?.count ?? "0");

			if (timeDifference < 10_000 || (timeDifference > 10_000 && count > 1)) {
				deletedBy = await this.client.api.guilds.getMember(message.guild_id!, mostRecentMatch.user_id!);

				const dontLogBotDeletes = await this.client.prisma.dontLogBotDeletes.findUnique({
					where: {
						guildId: message.guild_id!,
					},
				});

				if (dontLogBotDeletes && deletedBy.user!.bot) return;
			}
		}

		const embedToSend = {
			author: {
				name: "Message Deleted",
				icon_url: "https://cdn.karalite.com/user_2Z1iHO0Px2py0XMFB2sy1mb631L/auditMessageDelete.png",
			},
			description: `**User:** ${
				authorId
					? `<@${authorId}> ${(member.nick ?? member.user!.global_name) ? `${member.nick ?? member.user!.global_name} \`[${member.user!.username}]\`` : member.user!.username}`
					: "Unknown User"
			}${deletedBy ? `\n**Deleted By:** <@${deletedBy.user!.id}> ${(deletedBy.nick ?? deletedBy.user!.global_name) ? `${deletedBy.nick ?? deletedBy.user!.global_name} \`[${deletedBy.user!.username}]\`` : deletedBy.user!.username}` : ""}\n**Channel:** <#${message.channel_id}> \`(#${channelName})\` \`[${message.channel_id}]\`\n${
				oldMessage.createdAt
					? `**Message Created:** ${this.client.functions.generateTimestamp({
							timestamp: oldMessage.createdAt,
						})} (${this.client.functions.generateTimestamp({
							timestamp: oldMessage.createdAt,
							type: "R",
						})})\n`
					: ""
			}\n**Content:**\n${oldMessage?.content ?? message.content}`,
			color: this.client.config.colors.error,
			footer: {
				text: `Message ID: ${message.id}`,
			},
		} as APIEmbed;

		return Promise.all(
			loggingChannels.map(async (loggingChannel) =>
				this.client.api.channels.createMessage(loggingChannel.channelId, {
					embeds: [embedToSend],
					allowed_mentions: {
						parse: [],
					},
				}),
			),
		);
	}
}
