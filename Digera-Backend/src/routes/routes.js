const express = require('express');
const user = require('./User');
let router = express.Router();
router.use("/user", user);

module.exports =router;