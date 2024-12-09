const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RolePermission = new Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  permissionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Permission",
    required: true,
  },
});

module.exports = mongoose.model(
  "RolePermission",
  RolePermission,
  "role_permissions"
);
