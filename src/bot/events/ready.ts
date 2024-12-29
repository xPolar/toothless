import { env } from "node:process";
import type {
	GatewayReadyDispatchData,
	WithIntrinsicProps
} from "@discordjs/core";
import { GatewayDispatchEvents } from "@discordjs/core";
import { schedule } from "node-cron";
import EventHandler from "../../../lib/classes/EventHandler.js";
import type ExtendedClient from "../../../lib/extensions/ExtendedClient.js";

export default class Ready extends EventHandler {
	public constructor(client: ExtendedClient) {
		super(client, GatewayDispatchEvents.Ready, true);
	}

	/**
	 * Contains the initial state information.
	 *
	 * https://discord.com/developers/docs/topics/gateway-events#ready
	 */
	public override async run({
		shardId,
		data
	}: WithIntrinsicProps<GatewayReadyDispatchData>) {
		this.client.dataDog.gauge("guild_count", data.guilds.length, [
			`shard:${shardId}`
		]);

		await Promise.all(
			data.guilds.map(async (guild) => {
				this.client.guildOwnersCache.set(guild.id, "");

				const invites = await this.client.api.guilds.getInvites(
					guild.id
				);
				const invitesCache =
					this.client.invitesCache.get(guild.id) ??
					new Map(
						new Map(
							invites.map((invite) => [invite.code, invite.uses])
						)
					);

				this.client.invitesCache.set(guild.id, invitesCache);
			})
		);

		this.client.logger.info(
			`Logged in as ${data.user.username}#${data.user.discriminator} [${data.user.id}] on Shard ${shardId} with ${data.guilds.length} guilds.`
		);

		schedule("* * * * *", async () => {
			this.client.dataDog.gauge(
				"guilds",
				this.client.guildOwnersCache.size
			);
			this.client.dataDog.gauge(
				"approximate_user_count",
				this.client.approximateUserCount
			);

			for (const [
				guildId,
				usersInVoice
			] of this.client.usersInVoice.entries())
				this.client.dataDog.increment(
					"minutes_in_voice",
					usersInVoice.size,
					[`guild:${guildId}`]
				);

			if (env.DATADOG_API_KEY)
				this.client.dataDog.flush(
					() => {
						if (env.NODE_ENV === "development")
							this.client.logger.debug(
								"Flushed DataDog metrics."
							);
					},
					// eslint-disable-next-line promise/prefer-await-to-callbacks
					(error) => {
						this.client.logger.error(error);
						this.client.logger.sentry.captureException(error);
					}
				);
		});

		const selectOptions = Array.from(
			new Set(
				(await this.client.prisma.selectRole.findMany({})).map(
					(option) => [option.channelId, option.messageId]
				)
			)
		);

		for (const [channelId, messageId] of selectOptions)
			await this.client.functions.updateSelectMenuRoles(
				channelId!,
				messageId!
			);

		return this.client.logger.webhookLog("console", {
			content: `${this.client.functions.generateTimestamp()} Logged in as ${
				data.user.username
			}#${data.user.discriminator} [\`${
				data.user.id
			}\`] on Shard ${shardId} with ${data.guilds.length} guilds.`,
			allowed_mentions: { parse: [], replied_user: true },
			username: `${this.client.config.botName} | Console Logs`
		});
	}
}
