/*
  Warnings:

  - Added the required column `user_photo` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` ADD COLUMN `user_photo` VARCHAR(191) NOT NULL;
