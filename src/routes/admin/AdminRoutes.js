const express = require("express");
const router = express.Router();
const RoleController = require("../../controllers/admin/RoleController");
const LogController = require("../../controllers/admin/LogController");

//roles
router.get("/roles", RoleController.getRole);
router.post("/roles/save", RoleController.saveRole);

//role-permission
router.post("/roles-permission/save", RoleController.saveRolePermission)


// permissions
router.get("/permissions", RoleController.getPermission);
router.post("/permissions/save", RoleController.savePermission);
router.delete("/permissions/:id/remove", RoleController.removePermission)

module.exports = router;