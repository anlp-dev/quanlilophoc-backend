const express = require("express");
const router = express.Router();
const EmailController = require('../../controllers/system/EmailController')
const SecurityController = require("../../controllers/account/SecurityController");

router.post('/', EmailController.sendEmail);
router.get("/verify/:token", SecurityController.verifyEmail);


module.exports = router;
