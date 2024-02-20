const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../utils/db.js");
class AuthService {
  static async login({ username, password }) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          Username: username,
        },
      });

      if (!user) {
        throw { status: 400, message: "Invalid username or password" };
      }
      const passwordMatch = await bcrypt.compare(password, user.Pasword);

      if (!passwordMatch) {
        throw { status: 400, message: "Invalid username or password" };
      }

      const response = await this.me({ user });

      return { token: response.token, data: response.user };
    } catch (error) {
      throw error;
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

      const token = this.createJWT({
        id: userData.Id,
        Username: userData.Username,
        Name: userData.Name,
        Lastname: userData.Lastname,
        Rol: userData.RoleId,
      });
      return { token, user: userData };
    } catch (error) {
      throw error;
    }
  }

  static async register({ Username, Name, Lastname, password, rolId }) {
    try {
      const nameRegex = /^[a-zA-Z]+$/;

      const user = await prisma.user.findFirst({
        where: {
          Username,
        },
      });

      if (user) {
        return { status: 400, message: "UserName already exists" };
      }
      if (!nameRegex.test(Name)) {
        throw {
          status: 400,
          message: "The name only contain letters",
        };
      }
      if (!nameRegex.test(Lastname)) {
        throw {
          status: 400,
          message: "The lastname only contain letters",
        };
      }

      if (!this.isPasswordSecure(password)) {
        throw {
          status: 400,
          message:
            "Invalid password. It must contain at least one lowercase letter, one digit, and be at least 8 characters long.",
        };
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const userCreated = await prisma.user.create({
        data: {
          Username,
          RoleId: rolId,
          Pasword: hashedPassword,
          Name,
          Lastname,
        },
      });

      const login = await this.login({ username: Username, password });
      return login;
    } catch (error) {
      throw error;
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
          id: parseInt(id),
        },
        include: {
          roles: true,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
