const mongoose = require('mongoose');
const Account = require('../models/accounts/Account');
const RolePermission = require('../models/accounts/RolePermission');
const Permission = require('../models/accounts/Permission');
require('dotenv').config()
async function connect(){
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/QuanLiLopHoc');
    console.log('Connect successfuly!!!');
  } catch (error) {
    console.log('connect fail!!!');
  }
}

async function getPermissionsForUser(userId){
  try {
    const account = await Account.findById(userId);
    if(!account){
      return [];
    }
    const rolePermission = await RolePermission.find({roleId: account.roleId});
    const permissionIds = rolePermission.map(rp => rp.permissionId);
    const permissions = await Permission.find({_id: {$in: permissionIds}})
    return permissions.map(p => p.name);
  } catch (error) {
    console.error('Lỗi khi lấy quyền:', error);
    return [];                                                                                                                                                                                                    
  }
}

module.exports = {connect, getPermissionsForUser};
