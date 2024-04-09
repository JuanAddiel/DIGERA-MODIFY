const express = require('express');
const user = require('./User');
const cesionario = require("./Cesionario");
const role = require("./Role");
const poliza = require("./Poliza");
const surcursal = require("./Surcursal");
const rubro = require("./Rubro");

let router = express.Router();
router.use("/user", user);
router.use("/poliza",poliza);
router.use('/cesionario',cesionario);
router.use("/role", role);
router.use("/rubro", rubro);
router.use("/sucursal", surcursal);

module.exports =router;