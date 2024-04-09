const RoleService = require("../services/RoleService");

class RoleController {
  static async getAll(req, res) {
    try {
      const getAll = await RoleService.getAll();

      if (!getAll.roles || getAll.roles.length === 0) {
        return res.status(404).json({
          message: "No roles found",
        });
      }

      return res.json(getAll);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }
}

module.exports = RoleController;
