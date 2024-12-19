const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RolePermissionSchema = new Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  permissionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }], // Changed to an array
});

module.exports = mongoose.model(
    "RolePermission",
    RolePermissionSchema,
    "role_permissions"
);