-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_ibfk_1`;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_RoleId_fkey` FOREIGN KEY (`RoleId`) REFERENCES `roles`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
