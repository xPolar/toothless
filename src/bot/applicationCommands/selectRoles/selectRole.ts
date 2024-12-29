import type { APIApplicationCommandInteraction } from "@discordjs/core";
import {
	ApplicationCommandOptionType,
	ApplicationCommandType
} from "@discordjs/core";
import ApplicationCommand from "../../../../lib/classes/ApplicationCommand.js";
import type Language from "../../../../lib/classes/Language.js";
import type ExtendedClient from "../../../../lib/extensions/ExtendedClient.js";
import type { APIInteractionWithArguments } from "../../../../typings/index.js";

export default class SelectRole extends ApplicationCommand {
	/**
	 * Create our select role command.
	 */
	public constructor(client: ExtendedClient) {
		super(client, {
			options: {
				...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
					{
						name: "SELECT_ROLE_COMMAND_NAME",
						description: "SELECT_ROLE_COMMAND_DESCRIPTION"
					}
				),
				options: [
					{
						...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
							{
								name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_NAME",
								description:
									"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION"
							}
						),
						type: ApplicationCommandOptionType.Subcommand,
						options: [
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.Channel,
								required: true
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_MESSAGE_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_MESSAGE_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String,
								required: true
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_ROLE_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_ROLE_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String,
								required: true
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_LABEL_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_LABEL_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String,
								required: true
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_EMOJI_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_POSITION_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_POSITION_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.Integer,
								required: false
							}
						]
					},
					{
						...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
							{
								name: "SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_NAME",
								description:
									"SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_DESCRIPTION"
							}
						),
						type: ApplicationCommandOptionType.Subcommand,
						options: [
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_CHANNEL_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.Channel,
								required: true
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_MESSAGE_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_MESSAGE_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String,
								required: true
							},
							{
								...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
									{
										name: "SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_LABEL_OPTION_NAME",
										description:
											"SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_LABEL_OPTION_DESCRIPTION"
									}
								),
								type: ApplicationCommandOptionType.String,
								required: true,
								autocomplete: true
							}
						]
					},
					{
						...client.languageHandler.generateLocalizationsForApplicationCommandOptionType(
							{
								name: "SELECT_ROLE_COMMAND_LIST_SUB_COMMAND_NAME",
								description:
									"SELECT_ROLE_COMMAND_LIST_SUB_COMMAND_DESCRIPTION"
							}
						),
						type: ApplicationCommandOptionType.Subcommand
					}
				],
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
		const label =
			interaction.arguments.strings![
				this.client.languageHandler.defaultLanguage!.get(
					"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_LABEL_OPTION_NAME"
				)
			]!.value;

		if (
			interaction.arguments.subCommandGroup?.name ===
			this.client.languageHandler.defaultLanguage!.get(
				"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_NAME"
			)
		) {
			const roles =
				interaction.arguments.strings![
					this.client.languageHandler.defaultLanguage!.get(
						"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_ROLE_OPTION_NAME"
					)
				]!.value;

			const splitRoles = roles.split("<@&");
			splitRoles.shift();

			const roleIds = splitRoles.map((role) =>
				role.trim().replace(">", "")
			);

			const guildRoles = await this.client.api.guilds.getRoles(
				interaction.guild_id!
			);

			const validRoles = roleIds.filter((roleId) =>
				guildRoles.some((role) => role.id === roleId)
			);

			const emoji =
				interaction.arguments.strings![
					this.client.languageHandler.defaultLanguage!.get(
						"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_EMOJI_OPTION_NAME"
					)
				]?.value;
			const description =
				interaction.arguments.strings![
					this.client.languageHandler.defaultLanguage!.get(
						"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_NAME"
					)
				]?.value;

			const lastPosition = await this.client.prisma.selectRole.count({
				where: {
					messageId
				}
			});

			const requestedPosition =
				interaction.arguments.integers?.[
					this.client.languageHandler.defaultLanguage!.get(
						"SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_POSITION_OPTION_NAME"
					)
				]?.value;

			// Ensure position is within valid range
			if (
				requestedPosition !== undefined &&
				(requestedPosition < 0 || requestedPosition > lastPosition)
			) {
				return this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get("INVALID_POSITION_TITLE"),
								description: language.get(
									"INVALID_POSITION_DESCRIPTION",
									{
										min: 0,
										max: lastPosition
									}
								),
								color: this.client.config.colors.error
							}
						],
						allowed_mentions: { parse: [], replied_user: true }
					}
				);
			}

			const position = requestedPosition ?? lastPosition;

			// If a position was specified, update all roles to maintain continuous positions
			if (requestedPosition !== undefined) {
				await this.client.prisma.selectRole.updateMany({
					where: {
						messageId,
						position: {
							gte: position
						}
					},
					data: {
						position: {
							increment: 1
						}
					}
				});
			}

			await Promise.all([
				this.client.prisma.selectRole.upsert({
					where: {
						messageId_label: {
							messageId,
							label
						}
					},
					create: {
						channelId,
						guildId: interaction.guild_id!,
						label,
						messageId,
						description: description ?? null,
						emoji: emoji ?? null,
						roleIds: validRoles,
						position
					},
					update: {
						roleIds: validRoles,
						emoji: emoji ?? null,
						description: description ?? null,
						position
					}
				}),
				this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get("SELECT_ROLE_ADDED_TITLE"),
								description: language.get(
									"SELECT_ROLE_ADDED_DESCRIPTION",
									{
										label: `${
											emoji ? `${emoji} ` : ""
										}${label}`,
										roles: validRoles
											.map((id) => `<@&${id}>`)
											.join(", ")
									}
								),
								color: this.client.config.colors.success
							}
						],
						allowed_mentions: { parse: [], replied_user: true }
					}
				)
			]);
		} else {
			const optionId =
				interaction.arguments.strings![
					this.client.languageHandler.defaultLanguage!.get(
						"SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_LABEL_OPTION_NAME"
					)
				]!.value;

			const selectOption = await this.client.prisma.selectRole.findUnique(
				{
					where: {
						id: optionId
					}
				}
			);

			if (!selectOption)
				return this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get(
									"SELECT_ROLE_NOT_FOUND_TITLE"
								),
								description: language.get(
									"SELECT_ROLE_NOT_FOUND_DESCRIPTION",
									{
										label: optionId
									}
								),
								color: this.client.config.colors.error
							}
						],
						allowed_mentions: { parse: [], replied_user: true }
					}
				);
			await Promise.all([
				this.client.prisma.selectRole.deleteMany({
					where: {
						id: optionId
					}
				}),
				this.client.api.interactions.reply(
					interaction.id,
					interaction.token,
					{
						embeds: [
							{
								title: language.get(
									"SELECT_ROLE_REMOVED_TITLE"
								),
								description: language.get(
									"SELECT_ROLE_REMOVED_DESCRIPTION",
									{
										label: `${
											selectOption.emoji
												? `${selectOption.emoji} `
												: ""
										}${selectOption.label}`,
										roles: selectOption.roleIds
											.map((id) => `<@&${id}>`)
											.join(", ")
									}
								),
								color: this.client.config.colors.success
							}
						]
					}
				)
			]);
		}

		return this.client.functions.updateSelectMenuRoles(
			channelId,
			messageId
		);
	}
}
