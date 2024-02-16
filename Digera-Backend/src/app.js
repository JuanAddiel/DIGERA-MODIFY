const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (req, res,next) => {
  // Envía un objeto JSON como respuesta al cliente
  res.json({ message: "Hello world" });
});

// app.use(
//   serveStatic(__dirname + "/public", {
//     maxAge: "500000",
//   })
// );

if (process.env.BOOTSTRAP === "true") {
  BootsTrapService.init();
}

module.exports = app;
