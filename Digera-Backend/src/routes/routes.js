const express = require('express');
const user = require('./User');
const rubros = require("./Rubros");
let router = express.Router();
router.use("/user", user);
router.use("/rubros",rubros);


module.exports =router;