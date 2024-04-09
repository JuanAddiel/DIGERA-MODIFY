const AuthService = require("../services/AuthService.js");
const prisma = require("../utils/db.js");
const Response = require("../utils/response.js");
const jwt = require('jsonwebtoken');

class AuthController {
  static async getAll(req, res) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;

    try {
      const getAll = await AuthService.GetAll(page, limit);
      return res.json(getAll);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }
  static async login(req, res) {
    const { username, password } = req.body;
    try {
      if (!username || !password) {
        throw { message: "Username and password are required", status: 400 };
      }

      const entityCreated = await AuthService.login({ username, password });

      res.cookie("token", entityCreated.token, {
        sameSite: "none",
        secure: true,
        httpOnly: true,
      });

      // Retornar la respuesta con el token
      return res.json(Response.get("success", entityCreated));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Something goes wrong",
        data: error,
      });
    }
  }

  static async logout(req, res) {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out successfully" });
  }

  static async register(req, res) {
    const { username, password, name, lastname, rolId } = req.body;
    try {
      const entityCreated = await AuthService.register({
        username,
        password,
        rolId,
        name,
        lastname,
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
  static async verifyToken(req, res) {
    try {
      const { token } = req.body;
      if (!token) {
        return res.status(401).json({ message: "Token not provided" });
      }

      const user = await jwt.verify(token, process.env.JWT_SECRET);
      // Verificar si el usuario existe en la base de datos
      const userFound = await prisma.user.findFirst({
        where: {
          Id: user.id,
        },
        include: {
          roles: {
            select: {
              Name: true, // Seleccionar solo el campo 'Name' del rol
            },
          },
        },
      });
      if (!userFound) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Si el usuario existe, devolver la información del usuario
      return res.json({
        id: userFound.Id,
        username: userFound.Username,
        role: userFound.roles.Name,
        name: userFound.Name,
      });
    } catch (error) {
      // Manejo de errores
      if (
        error.name === "JsonWebTokenError" ||
        error.name === "TokenExpiredError"
      ) {
        return res.status(401).json({ message: "Unauthorized" });
      } else {
        console.error("Error verifying token:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}

module.exports = AuthController;
