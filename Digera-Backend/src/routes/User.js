const Router = require('express');
const AuthController = require('../controllers/AuthController');
const verifyToken = require('../middlewares/Auth');

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/me", AuthController.me);
router.post("/verifyToken", AuthController.verifyToken);
router.get("/logout", AuthController.logout);

module.exports = router;
