const Router = require("express");
const RubroController = require("../controllers/RubroController");

const router = Router();

router.get("/getAll", RubroController.getAll);

module.exports = router;
