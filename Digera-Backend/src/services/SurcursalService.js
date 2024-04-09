const prisma = require("../utils/db.js");

class SurcusalService {
  static async getAll() {
    try {
      const sucursales = await prisma.sucursal.findMany();
      return { sucursales };
    } catch (err) {
      console.error(err);
      return { error: "An error occurred while fetching data" };
    }
  }
}

module.exports = SurcusalService;
