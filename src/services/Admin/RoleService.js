const RolePermission = require("../../models/accounts/RolePermission");
const Permission = require("../../models/accounts/Permission");
const Role = require("../../models/accounts/Role");
const mongoose = require("mongoose");

class RoleService {
    async getAllRole(){
        try{
            const rolePermission = await RolePermission.find({});
            const roleId = rolePermission.map(p => p.roleId).flat();
            const role = await Role.find({ _id: { $in: roleId } });
            const permissionId = rolePermission.map(p => p.permissionIds).flat();
            const objectIds = permissionId.map(p => mongoose.Types.ObjectId(p));
            rolePermission.forEach(p => {
                p.roleId = role.find(r => r._id.toString() === p.roleId.toString());
            });
            return rolePermission;
        }catch (e){
            throw new Error(e);
        }
    }

    async addNewRole(data){
        try{
            const role_data = new Role(data);
            await role_data.save();
            const role_permission = new RolePermission({
                roleId: role_data._id,
                permissionIds: [],
            })
            await role_permission.save();
            return await this.getAllRole();
        }catch (e) {
            throw new Error(e);
        }
    }

    async getPermission(){
        try{
            const res = await Permission.find({});
            return res;
        }catch (e) {
            throw new Error(e);
        }
    }

    async addNewPermission(data){
        try{
            let obj_permission = {
                name: '',
                code: '',
                description: ''
            };
            let newData = [];
            let editData = [];
            data.map((d, index) => {
                if(d.isNew){
                    obj_permission = {name: d.name, code: d.code, description: d.description};
                    newData.push(obj_permission);
                }else{
                    editData.push(d);
                }
            })
            if(newData.length > 0){
                await Permission.insertMany(newData);
            }

            if(editData.length > 0){
                await Promise.all(
                    editData.map(async (permission) => {
                        await Permission.findByIdAndUpdate(permission._id, {
                            name: permission?.name,
                            code: permission?.code,
                            description: permission?.description
                        })
                    })
                )
            }

            return await this.getPermission();
        }catch (e) {
            throw new Error(e);
        }
    }

    async removePermission(id){
        try{
            await Permission.findByIdAndDelete(id);
            return await this.getPermission();
        }catch (e) {
            throw new Error(e);
        }
    }
    
    async saveRolePermission(data){
        try{
            await RolePermission.findByIdAndUpdate(data._id, {
                permissionIds: data.permissionIds
            });
            return await this.getAllRole();
        }catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new RoleService();