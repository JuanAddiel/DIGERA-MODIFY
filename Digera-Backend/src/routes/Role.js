const Router = require("express");
const RoleController = require("../controllers/RoleController");

const router = Router();

router.get("/getAll", RoleController.getAll);

module.exports = router;
