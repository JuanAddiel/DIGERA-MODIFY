const Router = require("express");
const CesionarioController = require("../controllers/CesionarioController");

const router = Router();

router.get("/getAll", CesionarioController.getAll);

module.exports = router;
