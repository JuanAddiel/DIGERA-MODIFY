const prisma = require("../utils/db");
const DefaultRole = async () => {
  try {
    const roles = [
      {
        Name: "Admin",
        Description:
          "El administrador es como el programador o el director o direccion de DIGERA",
      },
      {
        Name: "Encargados",
        Description:
          "Este rol consta de varios dept, son aquellos los que tiene un dpt correspondiente",
      },
      {
        Name: "Basico",
        Description:
          "Son aquellas personas que no tienen tantos permisos.",
      },
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
