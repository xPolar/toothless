-- CreateTable
CREATE TABLE "embeds" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,

    CONSTRAINT "embeds_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "embeds_name_guildId_key" ON "embeds"("name", "guildId");
