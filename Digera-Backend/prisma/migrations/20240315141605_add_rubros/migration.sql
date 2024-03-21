-- CreateTable
CREATE TABLE `Rubros` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Productor` VARCHAR(200) NOT NULL,
    `Poliza` VARCHAR(200) NOT NULL,
    `Rubros` VARCHAR(200) NOT NULL,
    `Area` VARCHAR(200) NOT NULL,
    `CedulaRnc` VARCHAR(200) NOT NULL,
    `Prestamos` VARCHAR(200) NOT NULL,
    `Fecha_Emision` DATETIME(3) NOT NULL,
    `Total_Prima` DOUBLE NOT NULL,
    `PagoProducto` DOUBLE NOT NULL,
    `PagoGobierno` DOUBLE NOT NULL,
    `ValorAsegurado` DOUBLE NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
