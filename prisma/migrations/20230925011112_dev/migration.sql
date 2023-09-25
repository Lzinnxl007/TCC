/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Comments";

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comments_id_key" ON "comments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "emails_id_key" ON "emails"("id");
