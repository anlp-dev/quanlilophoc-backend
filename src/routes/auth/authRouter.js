const express = require("express");
const router = express.Router();
const passport = require("passport");
const authMiddleware = require("../../middleware/authMiddleware");
const {inputValidationAccount} = require("../../middleware/inputValidation");
const securityMiddleware = require("../../middleware/securityMiddleware");
const authController = require("../../controllers/auth/authController");
const Role = require("../../models/user/Role");

router.post("/register", inputValidationAccount, authController.register);
router.post("/login", securityMiddleware, authController.login)

router.post('/role',  async (req, res) =>{
    const {name, code, description} = req.body;
    const role = new Role({name, code, description});
    await role.save();
    res.status(201).json(role);
})

module.exports = router;
