const SurcursalService = require("../services/SurcursalService");

class SurcursalController {
  static async getAll(req, res) {
    try {
      const getAll = await SurcursalService.getAll();

      if (!getAll.sucursales || getAll.sucursales.length === 0) {
        return res.status(404).json({
          message: "No surcursal found",
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

module.exports = SurcursalController;
