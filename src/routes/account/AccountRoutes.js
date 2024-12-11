const express = require("express");
const router = express.Router();
const AccountProfileController = require('../../controllers/AccountProfileController')

router.put('/:id', AccountProfileController.updateAccount)

module.exports = router;
