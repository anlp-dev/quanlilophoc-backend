const express = require("express");
const router = express.Router();
const EmailController = require('../../controllers/EmailController')
const SecurityController = require("../../controllers/SecurityController");

router.post('/', EmailController.sendEmail);
router.get("/verify/:token", SecurityController.verifyEmail);


module.exports = router;
