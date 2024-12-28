-- CreateEnum
CREATE TYPE "CommandType" AS ENUM ('TEXT_COMMAND', 'APPLICATION_COMMAND');

-- CreateEnum
CREATE TYPE "LogEvent" AS ENUM ('MESSAGE_EDITED', 'MESSAGE_DELETED', 'CHANNEL_CREATED', 'CHANNEL_DELETED', 'CHANNEL_UPDATED', 'ROLE_CREATED', 'ROLE_DELETED', 'ROLE_UPDATED', 'MEMBER_ROLE_UPDATED', 'MEMBER_UPDATED', 'MEMBER_JOINED', 'MEMBER_LEFT', 'VOICE_STATE_UPDATE', 'THREAD_CREATED', 'THREAD_UPDATED', 'THREAD_DELETED', 'INVITE_CREATED', 'INVITE_DELETED', 'INCIDENT_CREATED');

-- CreateTable
CREATE TABLE "command_cooldowns" (
    "userId" TEXT NOT NULL,
    "commandName" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "commandType" "CommandType" NOT NULL,

    CONSTRAINT "command_cooldowns_pkey" PRIMARY KEY ("commandName","commandType","userId")
);

-- CreateTable
CREATE TABLE "user_languages" (
    "userId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,

    CONSTRAINT "user_languages_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "log_channels" (
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "event" "LogEvent" NOT NULL,

    CONSTRAINT "log_channels_pkey" PRIMARY KEY ("channelId","event")
);

-- CreateTable
CREATE TABLE "member_joins" (
    "id" TEXT NOT NULL,
    "inviteCode" TEXT,
    "userId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_joins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
