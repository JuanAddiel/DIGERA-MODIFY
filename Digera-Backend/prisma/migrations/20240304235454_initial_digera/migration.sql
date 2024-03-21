-- CreateTable
CREATE TABLE `roles` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(200) NOT NULL,
    `Description` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(200) NOT NULL,
    `Username` VARCHAR(100) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Lastname` VARCHAR(200) NOT NULL,
    `RoleId` INTEGER NOT NULL,

    UNIQUE INDEX `user_Username_key`(`Username`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_RoleId_fkey` FOREIGN KEY (`RoleId`) REFERENCES `roles`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
