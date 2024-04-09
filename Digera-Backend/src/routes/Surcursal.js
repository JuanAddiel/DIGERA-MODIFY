const Router = require("express");
const SurcursalController = require("../controllers/SurcursalController");

const router = Router();

router.get("/getAll", SurcursalController.getAll);

module.exports = router;
