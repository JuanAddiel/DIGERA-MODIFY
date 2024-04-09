const prisma = require("../utils/db.js");

class CesionarioService {
  static async getAll() {
    try {
      const cesionarios = await prisma.cesionarios.findMany();
      return { cesionarios };
    } catch (err) {
      console.error(err);
      return { error: "An error occurred while fetching data" };
    }
  }
}

module.exports = CesionarioService;