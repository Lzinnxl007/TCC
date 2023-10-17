/*
  Warnings:

  - Added the required column `imc` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imc" TEXT NOT NULL;
