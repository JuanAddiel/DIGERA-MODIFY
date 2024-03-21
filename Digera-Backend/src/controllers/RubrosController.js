const RubroService = require('../services/RubrosService.js');
class RubrosController {
  static async getAll(req, res) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    try {
      const getAll = await RubroService.getAll(page, limit);
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
      const created = await RubroService.create(data);
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
      const updated = await RubroService.update(id, data);
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
      const deleted = await RubroService.deleted(id);
      return res.json(Response.get("success", deleted));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }
}

module.exports = RubrosController;
