import { env } from "node:process";
// import { API } from "@discordjs/core";
// import { REST } from "@discordjs/rest";
import { serve } from "@hono/node-server";
import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import Logger from "./Logger.js";

export default class Server {
	/**
	 * Our Hono instance.
	 */
	private readonly router: Hono;

	/**
	 * Our Prisma client, this is an ORM to interact with our PostgreSQL instance.
	 */
	public readonly prisma: PrismaClient<{
		errorFormat: "pretty";
		log: (
			| {
					emit: "event";
					level: "query";
			  }
			| {
					emit: "stdout";
					level: "error";
			  }
			| {
					emit: "stdout";
					level: "warn";
			  }
		)[];
	}>;

	/**
	 * Our interface to the Discord API.
	 */
	// private readonly discordApi = new API(
	// 	new REST({ version: "10" }).setToken(env.DISCORD_TOKEN)
	// );

	/**
	 * Create our Hono server.
	 */
	public constructor() {
		this.router = new Hono();

		this.prisma = new PrismaClient({
			errorFormat: "pretty",
			log: [
				{
					level: "warn",
					emit: "stdout",
				},
				{
					level: "error",
					emit: "stdout",
				},
				{ level: "query", emit: "event" },
			],
		});

		// I forget what this is even used for, but Vlad from https://github.com/vladfrangu/highlight uses it and recommended me to use it a while ago.
		if (env.NODE_ENV === "development") {
			this.prisma.$on("query", (event) => {
				try {
					const paramsArray = JSON.parse(event.params);
					const newQuery = event.query.replaceAll(/\$(?<captured>\d+)/g, (_, number) => {
						const value = paramsArray[Number(number) - 1];

						if (typeof value === "string") return `"${value}"`;
						if (Array.isArray(value)) return `'${JSON.stringify(value)}'`;

						return String(value);
					});

					Logger.debug("prisma:query", newQuery);
				} catch {
					Logger.debug("prisma:query", event.query, "PARAMETERS", event.params);
				}
			});

			this.prisma.$use(async (params, next) => {
				const before = Date.now();
				// eslint-disable-next-line n/callback-return
				const result = await next(params);
				const after = Date.now();

				Logger.debug("prisma:query", `${params.model}.${params.action} took ${String(after - before)}ms`);

				return result;
			});
		}
	}

	public async start() {
		this.registerRoutes();

		serve(
			{
				fetch: this.router.fetch,
				port: Number.parseInt(env.API_PORT, 10),
			},
			(info) => Logger.info(`Hono server started, listening on ${info.address}:${info.port}`),
		);
	}

	private registerRoutes() {
		this.router.get("/ping", (context) => context.text("PONG!"));

		this.router.get("/", (context) => context.text("hiii"));
	}
}
