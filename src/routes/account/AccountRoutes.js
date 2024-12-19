const express = require("express");
const router = express.Router();
const AccountProfileController = require('../../controllers/account/AccountProfileController')

router.put('/:id', AccountProfileController.updateAccount)

module.exports = router;
