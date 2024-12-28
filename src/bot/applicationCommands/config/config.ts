import type { APIApplicationCommandInteraction } from "@discordjs/core";
import {
	ApplicationCommandOptionType,
	ApplicationCommandType,
	ChannelType,
	MessageFlags,
	PermissionFlagsBits
} from "@discordjs/core";
import { LogEvent } from "@prisma/client";
import ApplicationCommand from "../../../../lib/classes/ApplicationCommand.js";
import type Language from "../../../../lib/classes/Language.js";
import type ExtendedClient from "../../../../lib/extensions/ExtendedClient.js";
import type { APIInteractionWithArguments } from "../../../../typings/index.js";

export default class Ping extends ApplicationCommand {
	/**
	 * The event names that can be logged.
	 */
	private readonly eventNames = Object.keys(
		LogEvent
	) as (keyof typeof LogEvent)[];

	/**
	 * Create our ping command.
	 *
	 * @param client - Our extended client.
	 */
	public constructor(client: ExtendedClient) {
		super(client, {
			options: {
				...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
					{
						name: "CONFIG_COMMAND_NAME",
						description: "CONFIG_COMMAND_DESCRIPTION"
					}
				),
				options: [
					{
						...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
							{
								name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_NAME",
								description:
									"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_DESCRIPTION"
							}
						),
						options: [
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME",
										description:
											"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION"
									}
								),
								options: [
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME",
												description:
													"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.Channel,
										channel_types: [
											ChannelType.GuildText,
											ChannelType.GuildAnnouncement,
											ChannelType.PublicThread,
											ChannelType.PrivateThread,
											ChannelType.AnnouncementThread
										],
										required: true
									},
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_NAME",
												description:
													"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.String,
										required: true,
										autocomplete: true
									}
								],
								type: ApplicationCommandOptionType.Subcommand
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_NAME",
										description:
											"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION"
									}
								),
								options: [
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_NAME",
												description:
													"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.Channel,
										channel_types: [
											ChannelType.GuildText,
											ChannelType.GuildAnnouncement,
											ChannelType.PublicThread,
											ChannelType.PrivateThread,
											ChannelType.AnnouncementThread
										],
										required: true
									},
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EVENT_OPTION_NAME",
												description:
													"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EVENT_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.String,
										autocomplete: true,
										required: true
									}
								],
								type: ApplicationCommandOptionType.Subcommand
							}
						],
						type: ApplicationCommandOptionType.SubcommandGroup
					},
					{
						...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
							{
								name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_NAME",
								description:
									"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_DESCRIPTION"
							}
						),
						options: [
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME",
										description:
											"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION"
									}
								),
								options: [
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME",
												description:
													"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.Channel,
										channel_types: [
											ChannelType.GuildText,
											ChannelType.GuildAnnouncement,
											ChannelType.PublicThread,
											ChannelType.PrivateThread,
											ChannelType.AnnouncementThread
										],
										required: true
									},
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EMOJI_OPTION_NAME",
												description:
													"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.String,
										required: true
									}
								],
								type: ApplicationCommandOptionType.Subcommand
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_NAME",
										description:
											"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION"
									}
								),
								options: [
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_NAME",
												description:
													"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.Channel,
										channel_types: [
											ChannelType.GuildText,
											ChannelType.GuildAnnouncement,
											ChannelType.PublicThread,
											ChannelType.PrivateThread,
											ChannelType.AnnouncementThread
										],
										required: true
									},
									{
										...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
											{
												name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EMOJI_OPTION_NAME",
												description:
													"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION"
											}
										),
										type: ApplicationCommandOptionType.String,
										required: true
									}
								],
								type: ApplicationCommandOptionType.Subcommand
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_NAME",
										description:
											"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.Subcommand
							}
						],
						type: ApplicationCommandOptionType.SubcommandGroup
					}
				],
				dm_permission: false,
				default_member_permissions:
					PermissionFlagsBits.ManageGuild.toString(),
				type: ApplicationCommandType.ChatInput
			}
		});
	}

	/**
	 * Run this application command.
	 *
	 * @param options - The options for this command.
	 * @param options.shardId - The shard ID that this interaction was received on.
	 * @param options.language - The language to use when replying to the interaction.
	 * @param options.interaction -  The interaction to run this command on.
	 */
	public override async run({
		interaction,
		language
	}: {
		interaction: APIInteractionWithArguments<APIApplicationCommandInteraction>;
		language: Language;
		shardId: number;
	}) {
		if (
			interaction.arguments.subCommandGroup!.name ===
			this.client.languageHandler.defaultLanguage!.get(
				"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_NAME"
			)
		) {
			const channelId =
				interaction.arguments.channels![
					this.client.languageHandler.defaultLanguage!.get(
						"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME"
					)
				]!.id;
			const event = interaction.arguments.strings![
				this.client.languageHandler.defaultLanguage!.get(
					"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_NAME"
				)
			]!.value as keyof typeof LogEvent;

			if (!this.eventNames.includes(event))
				return this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get(
									"INVALID_LOG_EVENT_NAME_TITLE"
								),
								description: language.get(
									"INVALID_LOG_EVENT_NAME_DESCRIPTION"
								),
								color: this.client.config.colors.error
							}
						],
						allowed_mentions: { parse: [], replied_user: true },
						flags: MessageFlags.Ephemeral
					}
				);

			if (
				interaction.arguments.subCommand!.name ===
				this.client.languageHandler.defaultLanguage!.get(
					"CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME"
				)
			) {
				return Promise.all([
					this.client.prisma.logChannel.upsert({
						where: {
							channelId_event: {
								channelId,
								event
							}
						},
						create: {
							channelId,
							guildId: interaction.guild_id!,
							event
						},
						update: {}
					}),
					this.client.api.interactions.reply(
						interaction.id,
						interaction.token,
						{
							embeds: [
								{
									title: language.get(
										"LOG_CHANNEL_ADDED_TITLE"
									),
									description: language.get(
										"LOG_CHANNEL_ADDED_DESCRIPTION",
										{
											event: event
												.split("_")
												.map(
													(word) =>
														word
															.charAt(0)
															.toUpperCase() +
														word
															.slice(1)
															.toLowerCase()
												)
												.join(" "),
											channel: `<#${channelId}>`
										}
									),
									color: this.client.config.colors.success
								}
							]
						}
					)
				]);
			}

			return Promise.all([
				this.client.prisma.logChannel.deleteMany({
					where: {
						channelId,
						event
					}
				}),
				this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get(
									"LOG_CHANNEL_REMOVED_TITLE"
								),
								description: language.get(
									"LOG_CHANNEL_REMOVED_DESCRIPTION",
									{
										event: event
											.split("_")
											.map(
												(word) =>
													word
														.charAt(0)
														.toUpperCase() +
													word.slice(1).toLowerCase()
											)
											.join(" "),
										channel: `<#${channelId}>`
									}
								),
								color: this.client.config.colors.success
							}
						]
					}
				)
			]);
		}

		if (
			interaction.arguments.subCommandGroup!.name ===
			this.client.languageHandler.defaultLanguage!.get(
				"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_NAME"
			)
		) {
			if (
				interaction.arguments.subCommand!.name ===
				this.client.languageHandler.defaultLanguage!.get(
					"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_NAME"
				)
			) {
				const autoReactions =
					await this.client.prisma.autoReaction.findMany({
						where: {
							guildId: interaction.guild_id!
						},
						select: {
							channelId: true,
							reaction: true
						}
					});

				return this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get("AUTO_REACTION_LIST_TITLE"),
								description: autoReactions
									.map(
										(autoReaction) =>
											`<#${autoReaction.channelId}> - ${autoReaction.reaction}`
									)
									.join("\n"),
								color: this.client.config.colors.success
							}
						]
					}
				);
			}

			const channelId =
				interaction.arguments.channels![
					this.client.languageHandler.defaultLanguage!.get(
						"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME"
					)
				]!.id;
			const emoji =
				interaction.arguments.strings![
					this.client.languageHandler.defaultLanguage!.get(
						"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EMOJI_OPTION_NAME"
					)
				]!.value;

			if (
				interaction.arguments.subCommand!.name ===
				this.client.languageHandler.defaultLanguage!.get(
					"CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME"
				)
			) {
				return Promise.all([
					this.client.prisma.autoReaction.upsert({
						where: {
							channelId_reaction: {
								channelId,
								reaction: emoji
							}
						},
						create: {
							channelId,
							guildId: interaction.guild_id!,
							reaction: emoji
						},
						update: {}
					}),
					this.client.api.interactions.reply(
						interaction.id,
						interaction.token,
						{
							embeds: [
								{
									title: language.get(
										"AUTO_REACTION_ADDED_TITLE"
									),
									description: language.get(
										"AUTO_REACTION_ADDED_DESCRIPTION",
										{
											channel: `<#${channelId}>`,
											emoji
										}
									),
									color: this.client.config.colors.success
								}
							]
						}
					)
				]);
			}

			return Promise.all([
				this.client.prisma.autoReaction.deleteMany({
					where: {
						channelId,
						reaction: emoji
					}
				}),
				this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get(
									"AUTO_REACTION_REMOVED_TITLE"
								),
								description: language.get(
									"AUTO_REACTION_REMOVED_DESCRIPTION",
									{
										channel: `<#${channelId}>`,
										emoji
									}
								),
								color: this.client.config.colors.success
							}
						]
					}
				)
			]);
		}
	}
}
