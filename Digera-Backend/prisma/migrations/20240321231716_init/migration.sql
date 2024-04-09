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
    INDEX `user_RoleId_fkey`(`RoleId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `polizas` (
    `ProductosId` INTEGER NOT NULL,
    `Provincia` VARCHAR(200) NOT NULL,
    `Sucursal` VARCHAR(200) NOT NULL,
    `nume` INTEGER NOT NULL,
    `Femision` VARCHAR(50) NOT NULL,
    `Factura` VARCHAR(100) NOT NULL,
    `Poliza` VARCHAR(100) NOT NULL,
    `Prestamo` VARCHAR(100) NOT NULL,
    `Cliente` VARCHAR(200) NOT NULL,
    `Telefono` VARCHAR(50) NOT NULL,
    `Cedula` VARCHAR(50) NOT NULL,
    `Cesionario` VARCHAR(100) NOT NULL,
    `area` DOUBLE NOT NULL,
    `DescdelSeguro` DOUBLE NOT NULL,
    `PrimaProductor` DOUBLE NOT NULL,
    `PagoGobierno` DOUBLE NOT NULL,
    `TotalPrima` DOUBLE NOT NULL,
    `ValAsegurado` DOUBLE NOT NULL,
    `paquete_No` VARCHAR(100) NOT NULL,
    `Fecha_pago` VARCHAR(100) NOT NULL,
    `Intervalo` VARCHAR(200) NOT NULL,
    `Longitud` VARCHAR(100) NOT NULL,
    `Latitud` VARCHAR(100) NOT NULL,
    `Fecha_Carga` VARCHAR(50) NOT NULL,
    `Espera` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`ProductosId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provincias` (
    `numero_p` INTEGER NOT NULL,
    `id_p` VARCHAR(20) NOT NULL,
    `descripcion_p` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`numero_p`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rubros` (
    `rubrosId` INTEGER NOT NULL,
    `Identificacion` VARCHAR(10) NOT NULL,
    `Descripcion` VARCHAR(30) NOT NULL,

    INDEX `rubrosId`(`rubrosId`),
    PRIMARY KEY (`rubrosId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sucursal` (
    `numero_s` INTEGER NOT NULL,
    `id_s` VARCHAR(20) NOT NULL,
    `descripcion_s` VARCHAR(200) NOT NULL,
    `id_p` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`numero_s`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_RoleId_fkey` FOREIGN KEY (`RoleId`) REFERENCES `roles`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
