const express = require("express");
const router = express.Router();
const LogController = require('../../controllers/admin/LogController')
const UserManageController = require('../../controllers/admin/UserManageController')
const {checkPermission} = require("../../middleware/authPermission");

router.get("/statistics/requests", LogController.getLog);
router.post("/log", LogController.saveLog)
router.get("/user", UserManageController.getAll);
router.put("/user/:id", UserManageController.updateUser);
module.exports = router;
