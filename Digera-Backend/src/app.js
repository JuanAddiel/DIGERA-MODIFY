const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router= require("./routes/routes");
const DefaultRole = require("./SEED/DefaultRole");
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use("/api",router);

// app.use(
//   serveStatic(__dirname + "/public", {
//     maxAge: "500000",
//   })
// );

if (process.env.SEED === "true") {
  DefaultRole();
}

module.exports = app;
