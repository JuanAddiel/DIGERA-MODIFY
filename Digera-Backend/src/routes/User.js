const Router = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/me", AuthController.me);
router.get("/me/:id", AuthController.getUser);

module.exports = router;
