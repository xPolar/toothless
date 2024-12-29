-- CreateTable
CREATE TABLE "select_roles" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "roleIds" TEXT[],
    "emoji" TEXT,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "position" INTEGER NOT NULL,

    CONSTRAINT "select_roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "select_roles_messageId_label_key" ON "select_roles"("messageId", "label");
