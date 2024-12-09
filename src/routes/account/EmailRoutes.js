const express = require("express");
const router = express.Router();
const EmailController = require('../../controllers/EmailController')

router.post('/', EmailController.sendEmail);

module.exports = router;
