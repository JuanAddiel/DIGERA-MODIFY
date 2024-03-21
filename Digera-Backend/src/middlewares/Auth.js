const jwt = require("jsonwebtoken");
const prisma = require("../utils/db.js");

const verifyToken = async (req, res, next) => {
  let token = req.headers["authorization"] || req.headers["Authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  token = token.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    var user;
    console.log(decoded)
    try {
      user = await prisma.user.findUnique({
        where: {
          Username :decoded.username
        },
      });
    } catch (error) {
      console.log(error);
    }
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid token.");
  }
  return next();
};

module.exports = verifyToken;
