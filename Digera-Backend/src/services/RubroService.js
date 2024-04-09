const prisma = require("../utils/db.js");

class RubroService {
  static async getAll() {
    try {
      const rubros = await prisma.rubros.findMany();
      return { rubros };
    } catch (err) {
      console.error(err);
      return { error: "An error occurred while fetching data" };
    }
  }
}

module.exports = RubroService;
