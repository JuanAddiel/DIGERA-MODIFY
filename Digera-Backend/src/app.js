const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router= require("./routes/routes");
const DefaultRole = require("./SEED/DefaultRole");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
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
