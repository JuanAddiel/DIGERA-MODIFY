const prisma = require("../utils/db.js");

class RoleService {
  static async getAll() {
    try {
      const roles = await prisma.roles.findMany();
      return { roles };
    } catch (err) {
      console.error(err);
      return { error: "An error occurred while fetching data" };
    }
  }
}

module.exports = RoleService;