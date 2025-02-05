const mongoose = require('mongoose');
const User = require('../models/user/User');
const RolePermission = require('../models/user/RolePermission');
const Permission = require('../models/user/Permission');
require('dotenv').config()
async function connect(){
  try {
    if(process.env.NODE_ENV === 'prod'){
      await mongoose.connect(process.env.URL_DB_PRODUCTION);
      console.log('Connect successfuly mode production!!!');
    }else {
      await mongoose.connect(process.env.URL_DB);
      console.log('Connect successfuly mode dev!!!');

    }
  } catch (error) {
    console.log('connect fail!!!');
  }
}

async function getPermissionsForUser(userId){
  try {
    const account = await User.findById(userId);
    if(!account){
      return [];
    }
    const rolePermission = await RolePermission.findOne({ roleId: account.roleId }).populate('roleId');
    const permissionId = rolePermission.permissionIds.flat();
    const objectIds = permissionId.map(p => mongoose.Types.ObjectId(p));
    const permissions = await Permission.find({ _id: { $in: objectIds } });
    rolePermission.permissionIds = permissions;
    return permissions.map(p => p.code);
  } catch (error) {
    console.error('Lỗi khi lấy quyền:', error);
    return [];
  }
}

module.exports = {connect, getPermissionsForUser};
