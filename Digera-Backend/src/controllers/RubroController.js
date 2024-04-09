const RubroService = require("../services/RubroService");

class RubroController {
  static async getAll(req, res) {
    try {
      const getAll = await RubroService.getAll();

      if (!getAll.rubros || getAll.rubros.length === 0) {
        return res.status(404).json({
          message: "No rubros found",
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

module.exports = RubroController;
