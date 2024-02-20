/*
  Warnings:

  - A unique constraint covering the columns `[Username]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_Username_key` ON `user`(`Username`);
