const Router = require("express");
const PolizaController = require("../controllers/PolizaController");

const router = Router();

router.post("/create", PolizaController.create);
router.post("/update:id", PolizaController.update);
router.get("/getAll", PolizaController.getAll);
router.get("/getByCedula", PolizaController.getCedula);
router.post("/delete", PolizaController.delete);

module.exports = router;
