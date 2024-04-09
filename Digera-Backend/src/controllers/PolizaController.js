const PolizaService = require("../services/PolizaService.js");
class PolizaController {
  static async getCedula(req, res) {
    const cedula = req.query.cedula;

    try {
      const getCedula = await PolizaService.getByCedula(
        cedula,
      );
      return res.json(getCedula);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }
  static async getAll(req, res) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const cedula = req.query.cedula;
    const cesionario = req.query.cesionario;
    const cliente = req.query.cliente;
    const poliza = req.query.poliza;
    const sucursal = req.query.sucursal;

    try {
      const getAll = await PolizaService.getAll(
        page,
        limit,
        cesionario,
        cedula,
        cliente,
        poliza,
        sucursal
      );
      return res.json(getAll);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      const created = await PolizaService.create(data);
      return res.json(Response.get("success", created));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
      const updated = await PolizaService.update(id, data);
      return res.json(Response.get("success", updated));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async delete(req, res) {
    const id = req.params.id;
    try {
      const deleted = await PolizaService.deleted(id);
      return res.json(Response.get("success", deleted));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }
}

module.exports = PolizaController;
