const express = require("express");
const router = express.Router();
const PasswordController = require('../../controllers/system/PasswordConfigController')

router.get('/password/signup', PasswordController.get);
router.get('/password', PasswordController.get);
router.post('/password', PasswordController.update);
// router.post('/password', PasswordController.add);

module.exports = router;
