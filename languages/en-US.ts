export default {
	LANGUAGE_ENABLED: true,
	LANGUAGE_ID: "en-US",
	LANGUAGE_NAME: "English, US",

	PARSE_REGEX:
		// eslint-disable-next-line unicorn/no-unsafe-regex, prefer-named-capture-group
		/^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/,
	MS_OTHER: "ms",
	SECOND_ONE: "second",
	SECOND_OTHER: "seconds",
	SECOND_SHORT: "s",
	MINUTE_ONE: "minute",
	MINUTE_OTHER: "minutes",
	MINUTE_SHORT: "m",
	HOUR_ONE: "hour",
	HOUR_OTHER: "hours",
	HOUR_SHORT: "h",
	DAY_ONE: "day",
	DAY_OTHER: "days",
	DAY_SHORT: "d",
	YEAR_ONE: "year",
	YEAR_OTHER: "years",
	YEAR_SHORT: "y",

	CreateInstantInvite: "Create Invite",
	KickMembers: "Kick Members",
	BanMembers: "Ban Members",
	Administrator: "Administrator",
	ManageChannels: "Manage Channels",
	ManageGuild: "Manage Server",
	AddReactions: "Add Reactions",
	ViewAuditLog: "View Audit Log",
	PrioritySpeaker: "Priority Speaker",
	Stream: "Video",
	ViewChannel: "View Channels",
	SendMessages: "Send Messages and Create Posts",
	SendTTSMessages: "Send Text-To-Speech Messages",
	ManageMessages: "Manage Messages",
	EmbedLinks: "Embed Links",
	AttachFiles: "Attach Files",
	ReadMessageHistory: "Read Message History",
	MentionEveryone: "Mention @everyone, @here, and All Roles",
	UseExternalEmojis: "Use External Emojis",
	ViewGuildInsights: "View Server Insights",
	Connect: "Connect",
	Speak: "Speak",
	MuteMembers: "Mute Members",
	DeafenMembers: "Deafen Members",
	MoveMembers: "Move Members",
	UseVAD: "Use Voice Activity",
	ChangeNickname: "Change Nickname",
	ManageNicknames: "Manage Nicknames",
	ManageRoles: "Manage Roles",
	ManageWebhooks: "Manage Webhooks",
	ManageGuildExpressions: "Manage Expressions",
	ManageEmojisAndStickers: "Manage Emojis and Stickers",
	UseApplicationCommands: "Use Application Commands",
	RequestToSpeak: "Request to Speak",
	ManageEvents: "Manage Events",
	ManageThreads: "Manage Threads and Posts",
	CreatePublicThreads: "Create Public Threads",
	CreatePrivateThreads: "Create Private Threads",
	UseExternalStickers: "Use External Stickers",
	SendMessagesInThreads: "Send Messages in Threads abd Posts",
	UseEmbeddedActivities: "Use Activities",
	ModerateMembers: "Timeout Members",
	ViewCreatorMonetizationAnalytics: "View Creator Monetization Analytics",
	UseSoundboard: "Use Soundboard",
	UseExternalSounds: "Use External Sounds",
	SendVoiceMessages: "Send Voice Messages",

	INVALID_ARGUMENT_TITLE: "Invalid Argument",

	INVALID_PATH_TITLE: "Invalid Command",
	INVALID_PATH_DESCRIPTION:
		"I have absolutely no idea how you reached this response.",

	INTERNAL_ERROR_TITLE: "Internal Error Encountered",
	INTERNAL_ERROR_DESCRIPTION:
		"An internal error has occurred, please try again later. This has already been reported to my developers.",
	SENTRY_EVENT_ID_FOOTER: "Sentry Event ID: {{eventId}}",

	NON_EXISTENT_APPLICATION_COMMAND_TITLE: "This {{type}} Does Not Exist",
	NON_EXISTENT_APPLICATION_COMMAND_DESCRIPTION:
		"You've somehow used a {{type}} that doesn't exist. I've removed the command so this won't happen in the future, this has already been reported to my developers.",

	MISSING_PERMISSIONS_BASE_TITLE: "Missing Permissions",
	MISSING_PERMISSIONS_OWNER_ONLY_DESCRIPTION:
		"This {{type}} can only be used by the owner of this server!",
	MISSING_PERMISSIONS_DEVELOPER_ONLY_DESCRIPTION:
		"This {{type}} can only be used by my developers!",
	MISSING_PERMISSIONS_USER_PERMISSIONS_ONE_DESCRIPTION:
		"You are missing the {{missingPermissions}} permission, which is required to use this {{type}}!",
	MISSING_PERMISSIONS_USER_PERMISSIONS_OTHER_DESCRIPTION:
		"You are missing the {{missingPermissions}} permissions, which are required to use this {{type}}!",
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_ONE_DESCRIPTION:
		"I are missing the {{missingPermissions}} permission, which I need to run this {{type}}!",
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_OTHER_DESCRIPTION:
		"I are missing the {{missingPermissions}} permissions, which I need to run this {{type}}!",

	TYPE_ON_COOLDOWN_TITLE: "{{type}} On Cooldown",
	TYPE_ON_COOLDOWN_DESCRIPTION:
		"This {{type}} is on cooldown for another {{formattedTime}}!",
	COOLDOWN_ON_TYPE_TITLE: "Cooldown On All {{type}}",
	COOLDOWN_ON_TYPE_DESCRIPTION:
		"Please wait a second before running another {{type}}!",

	AN_ERROR_HAS_OCCURRED_TITLE: "An Error Has Occurred",
	AN_ERROR_HAS_OCCURRED_DESCRIPTION:
		"An error has occurred, please try again later. This has already been reported to my developers.",

	PING_COMMAND_NAME: "ping",
	PING_COMMAND_DESCRIPTION:
		"Pong! Get the current ping / latency of toothless.",

	PING: "Ping?",
	PONG: "Pong! (Host latency of {{hostLatency}}ms)",

	CONFIG_COMMAND_NAME: "config",
	CONFIG_COMMAND_DESCRIPTION: "Manage toothless's config for your server.",

	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_NAME: "log_channels",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_DESCRIPTION:
		"Manage the log channels for your server.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME: "add",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION:
		"Add a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME:
		"channel",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to add as a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_NAME:
		"event",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_DESCRIPTION:
		"The event to log to the channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_NAME: "remove",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION:
		"Remove a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_NAME:
		"channel",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to remove as a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EVENT_OPTION_NAME:
		"event",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EVENT_OPTION_DESCRIPTION:
		"The event to remove from the channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_NAME: "list",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_DESCRIPTION:
		"List all log channels.",

	INVALID_LOG_EVENT_NAME_TITLE: "Invalid Log Event Name",
	INVALID_LOG_EVENT_NAME_DESCRIPTION:
		"The event name you provided is not a valid event name!",

	LOG_CHANNEL_ADDED_TITLE: "Log Channel Added",
	LOG_CHANNEL_ADDED_DESCRIPTION:
		"{{event}} will now be logged into {{channel}}!",

	LOG_CHANNEL_REMOVED_TITLE: "Log Channel Removed",
	LOG_CHANNEL_REMOVED_DESCRIPTION:
		"{{event}} will no longer be logged into {{channel}}!",

	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_NAME: "auto_reaction",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_DESCRIPTION:
		"Manage the auto reactions for your server.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME: "add",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION:
		"Add an auto reaction to a channel.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME:
		"channel",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to add an auto reaction to.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EMOJI_OPTION_NAME:
		"emoji",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION:
		"The emoji to react with.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_NAME: "remove",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION:
		"Remove an auto reaction from a channel.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_NAME:
		"channel",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to remove an auto reaction from.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EMOJI_OPTION_NAME:
		"emoji",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION:
		"The emoji to remove.",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_NAME: "list",
	CONFIG_AUTO_REACTION_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_DESCRIPTION:
		"List all auto reactions.",

	AUTO_REACTION_ADDED_TITLE: "Auto Reaction Added",
	AUTO_REACTION_ADDED_DESCRIPTION:
		"{{emoji}} will now be added to {{channel}}!",

	AUTO_REACTION_REMOVED_TITLE: "Auto Reaction Removed",
	AUTO_REACTION_REMOVED_DESCRIPTION:
		"{{emoji}} will no longer be added to {{channel}}!",

	AUTO_REACTION_LIST_TITLE: "Auto Reactions",

	EMBED_COMMAND_NAME: "embed",
	EMBED_COMMAND_DESCRIPTION: "Manage toothless's embeds for your server.",

	EMBED_COMMAND_CREATE_SUB_COMMAND_NAME: "create",
	EMBED_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION: "Create an embed.",
	EMBED_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_NAME: "name",
	EMBED_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the embed you want to create.",
	EMBED_COMMAND_CREATE_SUB_COMMAND_DATA_OPTION_NAME: "data",
	EMBED_COMMAND_CREATE_SUB_COMMAND_DATA_OPTION_DESCRIPTION:
		"The data of the embed, usually exported from discohook.org -> JSON Data Editor.",

	EMBED_COMMAND_DELETE_SUB_COMMAND_NAME: "delete",
	EMBED_COMMAND_DELETE_SUB_COMMAND_DESCRIPTION: "Delete an embed.",
	EMBED_COMMAND_DELETE_SUB_COMMAND_NAME_OPTION_NAME: "embed",
	EMBED_COMMAND_DELETE_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the embed you want to delete.",

	EMBED_COMMAND_RENAME_SUB_COMMAND_NAME: "rename",
	EMBED_COMMAND_RENAME_SUB_COMMAND_DESCRIPTION: "Rename an embed.",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NAME_OPTION_NAME: "name",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the embed you want to rename.",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NEW_NAME_OPTION_NAME: "new_name",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NEW_NAME_OPTION_DESCRIPTION:
		"The new name of the embed.",

	EMBED_COMMAND_LIST_SUB_COMMAND_NAME: "list",
	EMBED_COMMAND_LIST_SUB_COMMAND_DESCRIPTION: "List all embeds.",

	EMBED_COMMAND_PREVIEW_SUB_COMMAND_NAME: "preview",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_DESCRIPTION: "Preview an embed.",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_NAME_OPTION_NAME: "embed",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the embed you want to preview.",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to send the preview in.",

	INVALID_JSON_TITLE: "Invalid JSON",
	INVALID_JSON_DESCRIPTION: "The JSON you provided is invalid.",

	EMBED_CREATED_TITLE: "Embed Created",
	EMBED_CREATED_DESCRIPTION:
		"Embed **{{embedName}}** `[{{embedId}}]` has been created!",

	PREVIEW_EMBED_BUTTON_LABEL: "Preview Embed",

	EMBED_NOT_FOUND_TITLE: "Embed Not Found",
	EMBED_NOT_FOUND_DESCRIPTION:
		"An embed with an ID `{{embedId}}` was not found!",

	EMBED_DELETED_TITLE: "Embed Deleted",
	EMBED_DELETED_DESCRIPTION:
		"Embed **{{embedName}}** `[{{embedId}}]` has been deleted!",

	EMBEDS_LIST_TITLE: "Embeds",
	EMBEDS_LIST_NO_EMBEDS_DESCRIPTION:
		"There are currently no embeds for this server, add some by doing `/embed create`!",

	MISSING_PERMISSIONS_PREVIEW_MESSAGE_TITLE: "Missing Permissions",
	MISSING_PERMISSIONS_PREVIEW_MESSAGE_DESCRIPTION:
		"I'm unable to send a preview of the `{{name}}` embed into {{channel}}!",

	EMBED_PREVIEW_SENT_TITLE: "Embed Preview Sent",
	EMBED_PREVIEW_SENT_DESCRIPTION:
		"The embed preview has been sent to {{channel}}!",

	JUMP_TO_MESSAGE_BUTTON_LABEL: "Jump To Message",

	EMBED_RENAMED_TITLE: "Embed Renamed",
	EMBED_RENAMED_DESCRIPTION:
		"Embed **{{oldEmbedName}}** `[{{embedId}}]` has been renamed to **{{newEmbedName}}**!",

	SELECT_ROLE_COMMAND_NAME: "select_role",
	SELECT_ROLE_COMMAND_DESCRIPTION:
		"Manage select menu roles for your server.",

	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_NAME: "add",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION:
		"Add a select menu option to a message.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to add a select menu option to.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_MESSAGE_OPTION_NAME: "message",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_MESSAGE_OPTION_DESCRIPTION:
		"The message to add a select menu option to.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_ROLE_OPTION_NAME: "role",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_ROLE_OPTION_DESCRIPTION:
		"The role(s) to give to the user when they select this option.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_LABEL_OPTION_NAME: "label",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_LABEL_OPTION_DESCRIPTION:
		"The label of the select menu option.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_EMOJI_OPTION_NAME: "emoji",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION:
		"The emoji of the select menu option.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_NAME:
		"description",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_DESCRIPTION:
		"The description of the select menu option.",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_POSITION_OPTION_NAME: "position",
	SELECT_ROLE_COMMAND_CREATE_SUB_COMMAND_POSITION_OPTION_DESCRIPTION:
		"The position of this select role in the menu (0-based). If not specified, will be added at the end.",

	INVALID_POSITION_TITLE: "Invalid Position",
	INVALID_POSITION_DESCRIPTION:
		"The position must be between {{min}} and {{max}}.",

	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_NAME: "remove",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_DESCRIPTION:
		"Remove a select menu option from a message.",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to remove a select menu option from.",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_MESSAGE_OPTION_NAME: "message",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_MESSAGE_OPTION_DESCRIPTION:
		"The message to remove a select menu option from.",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_LABEL_OPTION_NAME: "label",
	SELECT_ROLE_COMMAND_DELETE_SUB_COMMAND_LABEL_OPTION_DESCRIPTION:
		"The label of the select menu option.",

	SELECT_ROLE_COMMAND_LIST_SUB_COMMAND_NAME: "list",
	SELECT_ROLE_COMMAND_LIST_SUB_COMMAND_DESCRIPTION:
		"List all select menu roles for the server.",

	SELECT_ROLE_ADDED_TITLE: "Select Menu Role Added",
	SELECT_ROLE_ADDED_DESCRIPTION:
		"{{roles}} will now be given to users who select the option **{{label}}**!",

	SELECT_ROLE_REMOVED_TITLE: "Select Menu Role Removed",
	SELECT_ROLE_REMOVED_DESCRIPTION:
		"{{roles}} will no longer be given to users who select the option **{{label}}**!",

	SELECT_ROLE_NOT_FOUND_TITLE: "Select Menu Role Not Found",
	SELECT_ROLE_NOT_FOUND_DESCRIPTION:
		"A select menu role with the label **{{label}}** was not found!",

	SELECT_ROLE_LIST_TITLE: "Select Menu Roles",

	ROLES_EDITED_TITLE: "Roles Edited"
};
