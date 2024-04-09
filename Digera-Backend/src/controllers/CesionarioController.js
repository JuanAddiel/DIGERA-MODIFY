const CesionarioService = require("../services/CesionarioService");

class CesionarioController {
  static async getAll(req, res) {
    try {
      const getAll = await CesionarioService.getAll();

      if (!getAll.cesionarios || getAll.cesionarios.length === 0) {
        return res.status(404).json({
          message: "No cesionarios found",
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

module.exports = CesionarioController;
