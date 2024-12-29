import type { APIMessageComponentSelectMenuInteraction } from "@discordjs/core";
import { MessageFlags } from "@discordjs/core";
import type Language from "../../../../lib/classes/Language.js";
import SelectMenu from "../../../../lib/classes/SelectMenu.js";
import type ExtendedClient from "../../../../lib/extensions/ExtendedClient.js";

export default class SelectRole extends SelectMenu {
	/**
	 * Create our select role select menu.
	 *
	 * @param client - Our extended client.
	 */
	public constructor(client: ExtendedClient) {
		super(client, {
			name: "selectRole"
		});
	}

	/**
	 * Run this select menu.
	 *
	 * @param options The options to run this select menu.
	 * @param options.interaction The interaction to run this select menu.
	 * @param options.language The language to use when replying to the interaction.
	 * @param options.shardId The shard ID to use when replying to the interaction.
	 */
	public override async run({
		interaction,
		language
	}: {
		interaction: APIMessageComponentSelectMenuInteraction;
		language: Language;
		shardId: number;
	}) {
		const selectedOptions = await Promise.all(
			interaction.data.values.map((value) =>
				this.client.prisma.selectRole.findUnique({
					where: {
						id: value
					}
				})
			)
		);

		let newRoles = interaction.member?.roles ?? [];

		for (const selectedOption of selectedOptions.filter(Boolean)) {
			const shouldRemove = selectedOption!.roleIds.some((roleId) =>
				interaction.member?.roles.includes(roleId)
			);

			if (shouldRemove)
				newRoles = newRoles.filter(
					(roleId) => !selectedOption!.roleIds.includes(roleId)
				);
			else newRoles = [...newRoles, ...selectedOption!.roleIds];
		}

		newRoles = Array.from(new Set(newRoles));

		const addedRoles = newRoles.filter(
			(role) => !(interaction.member?.roles ?? []).includes(role)
		);
		const removedRoles = (interaction.member?.roles ?? []).filter(
			(role) => !newRoles.includes(role)
		);

		return Promise.all([
			this.client.api.guilds.editMember(
				interaction.guild_id!,
				interaction.user!.id,
				{
					roles: newRoles
				}
			),
			this.client.api.interactions.reply(
				interaction.id,
				interaction.token,
				{
					embeds: [
						{
							title: language.get("ROLES_EDITED_TITLE"),
							description: `Your roles have been updated!${
								addedRoles.length
									? `\nAdded roles: ${addedRoles
											.map((roleId) => `<@&${roleId}>`)
											.join(", ")}`
									: ""
							}${
								removedRoles.length
									? `\nRemoved roles: ${removedRoles
											.map((roleId) => `<@&${roleId}>`)
											.join(", ")}`
									: ""
							}`
						}
					],
					allowed_mentions: { parse: [], replied_user: true },
					flags: MessageFlags.Ephemeral
				}
			)
		]);
	}
}
