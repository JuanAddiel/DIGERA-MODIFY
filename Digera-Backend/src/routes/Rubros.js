const Router = require("express");
const RubrosController = require('../controllers/RubrosController');

const router = Router();

router.post("/create",RubrosController.create );
router.post("/update:id", RubrosController.update );
router.get("/getAll", RubrosController.getAll);
router.post("/delete", RubrosController.delete);

module.exports = router;
