const AuthService = require('../services/AuthService.js');
const Response = require("../utils/response.js");

class AuthController {
  static async login(req, res) {
    const { username, password } = req.body;
    try {
      if (!username || !password) {
        throw { message: "Username and password are required", status: 400 };
      }

      const entityCreated = await AuthService.login({ username, password });

      return res.json(Response.get("success", entityCreated));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async register(req, res) {
    const { Username, password, Name, Lastname, rolId } = req.body;
    try {
      const entityCreated = await AuthService.register({
        Username,
        password,
        rolId,
        Name,
        Lastname,
      });
      return res.json(Response.get("success", entityCreated));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async me(req, res) {
    try {
      const user = await AuthService.me({ user: req.user });
      return res.json(Response.get("success", user));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async getUser(req, res) {
    try {
      const user = await AuthService.getUser({ id: req.params.id });
      return res.json(Response.get("success", user));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }
}

module.exports = AuthController;
