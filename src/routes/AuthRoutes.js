const express = require("express");
const router = express.Router();
const passport = require("passport");
const authMiddleware = require("../middleware/authMiddleware");
const SecurityController = require("../controllers/SecurityController");

router.post("/register", SecurityController.register);
// Đăng nhập
router.post("/login", passport.authenticate("local"), SecurityController.login);
// Truy cập thông tin người dùng (yêu cầu xác thực)
router.get("/profile", authMiddleware, SecurityController.getAccountByToken);

module.exports = router;
