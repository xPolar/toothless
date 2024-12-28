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
	INVALID_PATH_DESCRIPTION: "I have absolutely no idea how you reached this response.",

	INTERNAL_ERROR_TITLE: "Internal Error Encountered",
	INTERNAL_ERROR_DESCRIPTION:
		"An internal error has occurred, please try again later. This has already been reported to my developers.",
	SENTRY_EVENT_ID_FOOTER: "Sentry Event ID: {{eventId}}",

	NON_EXISTENT_APPLICATION_COMMAND_TITLE: "This {{type}} Does Not Exist",
	NON_EXISTENT_APPLICATION_COMMAND_DESCRIPTION:
		"You've somehow used a {{type}} that doesn't exist. I've removed the command so this won't happen in the future, this has already been reported to my developers.",

	MISSING_PERMISSIONS_BASE_TITLE: "Missing Permissions",
	MISSING_PERMISSIONS_OWNER_ONLY_DESCRIPTION: "This {{type}} can only be used by the owner of this server!",
	MISSING_PERMISSIONS_DEVELOPER_ONLY_DESCRIPTION: "This {{type}} can only be used by my developers!",
	MISSING_PERMISSIONS_USER_PERMISSIONS_ONE_DESCRIPTION:
		"You are missing the {{missingPermissions}} permission, which is required to use this {{type}}!",
	MISSING_PERMISSIONS_USER_PERMISSIONS_OTHER_DESCRIPTION:
		"You are missing the {{missingPermissions}} permissions, which are required to use this {{type}}!",
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_ONE_DESCRIPTION:
		"I are missing the {{missingPermissions}} permission, which I need to run this {{type}}!",
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_OTHER_DESCRIPTION:
		"I are missing the {{missingPermissions}} permissions, which I need to run this {{type}}!",

	TYPE_ON_COOLDOWN_TITLE: "{{type}} On Cooldown",
	TYPE_ON_COOLDOWN_DESCRIPTION: "This {{type}} is on cooldown for another {{formattedTime}}!",
	COOLDOWN_ON_TYPE_TITLE: "Cooldown On All {{type}}",
	COOLDOWN_ON_TYPE_DESCRIPTION: "Please wait a second before running another {{type}}!",

	AN_ERROR_HAS_OCCURRED_TITLE: "An Error Has Occurred",
	AN_ERROR_HAS_OCCURRED_DESCRIPTION:
		"An error has occurred, please try again later. This has already been reported to my developers.",

	PING_COMMAND_NAME: "ping",
	PING_COMMAND_DESCRIPTION: "Pong! Get the current ping / latency of toothless.",

	PING: "Ping?",
	PONG: "Pong! (Host latency of {{hostLatency}}ms)",

	CONFIG_COMMAND_NAME: "config",
	CONFIG_COMMAND_DESCRIPTION: "Manage toothless's config for your server.",

	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_NAME: "log_channels",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_DESCRIPTION: "Manage the log channels for your server.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME: "add",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION: "Add a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to add as a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event to log to the channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_NAME: "remove",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION: "Remove a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to remove as a log channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_EVENT_OPTION_DESCRIPTION:
		"The event to remove from the channel.",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_NAME: "list",
	CONFIG_LOG_CHANNELS_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_DESCRIPTION: "List all log channels.",

	INVALID_LOG_EVENT_NAME_TITLE: "Invalid Log Event Name",
	INVALID_LOG_EVENT_NAME_DESCRIPTION: "The event name you provided is not a valid event name!",

	LOG_CHANNEL_ADDED_TITLE: "Log Channel Added",
	LOG_CHANNEL_ADDED_DESCRIPTION: "{{event}} will now be logged into {{channel}}!",

	LOG_CHANNEL_REMOVED_TITLE: "Log Channel Removed",
	LOG_CHANNEL_REMOVED_DESCRIPTION: "{{event}} will no longer be logged into {{channel}}!",
};
