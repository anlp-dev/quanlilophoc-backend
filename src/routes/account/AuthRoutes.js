const express = require("express");
const router = express.Router();
const passport = require("passport");
const authMiddleware = require("../../middleware/authMiddleware");
const SecurityController = require("../../controllers/account/SecurityController");
const {inputValidationAccount} = require("../../middleware/inputValidation");
const securityMiddleware = require("../../middleware/securityMiddleware");
const PasswordConfigController = require("../../controllers/system/PasswordConfigController");

router.post("/register", inputValidationAccount, SecurityController.register);
// Đăng nhập
router.post("/login", securityMiddleware, SecurityController.login);
router.get("/profile", authMiddleware, SecurityController.getAccountByToken);
router.get("/account/:id", SecurityController.getAccountByUserId)
router.get("/config/password", PasswordConfigController.get);

module.exports = router;
