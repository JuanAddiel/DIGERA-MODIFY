const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../utils/db.js");

class AuthService {
  static async GetAll(page, limit) {
    try {
      page = parseInt(page);
      limit = parseInt(limit);

      const [total, users] = await Promise.all([
        prisma.user.count(),
        prisma.user.findMany({
          include: {
            roles: {
              select: {
                Name: true, // Seleccionar solo el campo 'Name' del rol
              },
            },
          },
          skip: (page - 1) * limit,
          take: limit,
        }),
      ]);

      const totalPages = Math.ceil(parseInt(total) / limit);

      return {
        total,
        page,
        limit,
        totalPages,
        next:
          page < totalPages
            ? `/api/user?page=${page + 1}&limit=${limit}`
            : null,
        prev: page > 1 ? `/api/user?page=${page - 1}&limit=${limit}` : null,
        users: users.map((user) => ({
          Id: user.Id,
          Role: user.roles ? user.roles.Name : null, // Obtener el nombre del rol
          Name: user.Name,
          Lastname:user.Lastname,
          Username: user.Username,
        })),
      };
    } catch (err) {
      console.log(err);
      return { error: "An error occurred while fetching data" };
    }
  }

  static async login({ username, password }) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          Username: username,
        },
      });
      if (!user) {
        throw { status: 404, message: "User not found" };
      }

      const passwordMatch = await bcrypt.compare(password, user.Password);
      if (!passwordMatch) {
        throw { status: 401, message: "Invalid password" };
      }

      const response = await this.me({ user });

      return { token: response.token, status: 200 };
    } catch (error) {
      let status = 500;
      let message = "Internal Server Error";

      if (error.status) {
        status = error.status;
        message = error.message;
      }

      throw { status, message };
    }
  }

  static async me({ user }) {
    try {
      const userData = await prisma.user.findUnique({
        where: {
          Id: user.Id,
        },
        include: {
          roles: true,
        },
      });

      if (!userData) {
        throw { status: 404, message: "User data not found" };
      }

      const token = this.createJWT({
        Id: userData.Id,
        Username: userData.Username,
        Name: userData.Name,
      });

      return { token, user: userData };
    } catch (error) {
      let status = 500;
      let message = "Internal Server Error";
      if (error.status) {
        status = error.status;
        message = error.message;
      }

      throw { status, message };
    }
  }
  static async register({ username, name, lastname, password, rolId }) {
    try {
      const passwordMinLength = 8;
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

      const usernameMinLength = 6;

      const existingUser = await prisma.user.findUnique({
        where: {
          Username: username,
        },
      });

      if (existingUser) {
        throw { status: 400, message: "Username already exists" };
      }

      if (username.length < usernameMinLength) {
        throw {
          status: 400,
          message: "Username must be at least 6 characters long",
        };
      }
      if (password.length < passwordMinLength) {
        throw {
          status: 400,
          message: "Password must be at least 8 characters long",
        };
      }

      if (!passwordRegex.test(password)) {
        throw {
          status: 400,
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        };
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const userCreated = await prisma.user.create({
        data: {
          Username: username,
          RoleId: parseInt(rolId),
          Password: hashedPassword,
          Name: name,
          Lastname: lastname,
        },
      });

      const loginResponse = await this.login({ username, password });

      return loginResponse;
    } catch (error) {
      let status = 500;
      let message = "Internal Server Error";

      if (error.status) {
        status = error.status;
        message = error.message;
      }

      throw { status, message };
    }
  }

  static createJWT(user) {
    const token = jwt.sign(
      {
        id: user.Id,
        username: user.Username,
        rol: user.RoleId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    return token;
  }

  static isPasswordSecure(password) {
    const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    return regex.test(password);
  }

  static async getUser({ id }) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          Id: parseInt(id),
        },
        include: {
          roles: true,
        },
      });

      if (!user) {
        throw { status: 404, message: "User not found" };
      }

      return user;
    } catch (error) {
      let status = 500; // Internal Server Error por defecto
      let message = "Internal Server Error";

      if (error.status) {
        status = error.status;
        message = error.message;
      }

      throw { status, message };
    }
  }
}

module.exports = AuthService;
