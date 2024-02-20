const prisma = require("../utils/db");
const DefaultRole = async () => {
  try {
    const roles = [
      { Name: "Admin", Description: "Administrador puede realizar de todo" },
      { Name: "Basic", Description: "Basico puede realizar algunas cosas" },
    ];
    await prisma.roles.createMany({
      data: roles,
    });
    console.log("Roles seeded successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DefaultRole;
