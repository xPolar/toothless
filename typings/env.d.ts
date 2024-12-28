declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_PORT: string;
			APPLICATION_ID: string;
			CLIENT_SECRET: string;
			CONSOLE_HOOK: string;
			DATABASE_URL: string;
			DATADOG_API_KEY: string;
			DEVELOPMENT_GUILD_ID: string;
			DISCORD_TOKEN: string;
			GUILD_HOOK: string;
			NODE_ENV: "development" | "production";
			SENTRY_DSN: string;
		}
	}
}

export {};
