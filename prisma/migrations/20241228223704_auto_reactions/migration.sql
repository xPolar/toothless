-- CreateTable
CREATE TABLE "auto_reactions" (
    "channelId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "reaction" TEXT NOT NULL,

    CONSTRAINT "auto_reactions_pkey" PRIMARY KEY ("channelId","reaction")
);
