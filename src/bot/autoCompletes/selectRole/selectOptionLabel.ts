import type { APIApplicationCommandAutocompleteInteraction } from "@discordjs/core";
import AutoComplete from "../../../../lib/classes/AutoComplete.js";
import type Language from "../../../../lib/classes/Language.js";
import type ExtendedClient from "../../../../lib/extensions/ExtendedClient.js";
import type { APIInteractionWithArguments } from "../../../../typings/index.js";

export default class SelectRoleLabel extends AutoComplete {
	/**
	 * Create our select role label auto complete.
	 *
	 * @param client - Our extended client.
	 */
	public constructor(client: ExtendedClient) {
		super(["select_role-remove-label"], client);
	}

	/**
	 * Run this auto complete.
	 *
	 * @param options - The options for this auto complete.
	 * @param options.shardId - The shard ID that this interaction was received on.
	 * @param options.language - The language to use when replying to the interaction.
	 * @param options.interaction - The interaction to run this auto complete on.
	 */
	public override async run({
		interaction
	}: {
		interaction: APIInteractionWithArguments<APIApplicationCommandAutocompleteInteraction>;
		language: Language;
		shardId: number;
	}) {
		const value = interaction.arguments.focused?.value;
		const channelId =
			interaction.arguments.channels![
				this.client.languageHandler.defaultLanguage!.get(
					"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_NAME"
				)
			]!.id;
		const messageId =
			interaction.arguments.strings![
				this.client.languageHandler.defaultLanguage!.get(
					"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_MESSAGE_OPTION_NAME"
				)
			]!.value;

		if (!channelId || !messageId)
			return this.client.api.interactions.createAutocompleteResponse(
				interaction.id,
				interaction.token,
				{
					choices: []
				}
			);

		const selectRoles = await this.client.prisma.selectRole.findMany({
			where: {
				label: {
					startsWith: (
						(value as string | undefined) ?? ""
					).toLowerCase()
				},
				channelId,
				messageId
			},
			take: 25,
			orderBy: {
				position: "asc"
			}
		});

		return this.client.api.interactions.createAutocompleteResponse(
			interaction.id,
			interaction.token,
			{
				choices: selectRoles.map((selectRole) => ({
					name: selectRole.label,
					value: selectRole.id
				}))
			}
		);
	}
}
