const {resExport} = require("../../enums/resExport")
const MESSAGE = require("../../messages/message")
const RequestLog = require("../../models/admin/Log");
const RoleService = require("../../services/Admin/RoleService");
class RoleController {
    async getRole(req, res){
        try {
            const data = await RoleService.getAllRole();
            console.log(data)
            if(data){
                resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, data, res);
            }else{
                resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, null, res);
            }
        }catch (e) {
           resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, null, res);
        }
    }

    async saveRole(req, res){
        try{
            const data = await RoleService.addNewRole(req.body);
            if(data){
                resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, data, res);
            }else{
                resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, null, res);
            }
        }catch (e) {
            resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, null, res);
        }
    }
    
    async getPermission(req, res){
        try{
            const data = await RoleService.getPermission();
            if(data){
                resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, data, res);
            }else{
                resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, null, res);
            }
        }catch (e) {
            resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, null, res);
        }
    }
    
    async savePermission(req, res){
        try{
            const data = await RoleService.addNewPermission(req.body);
            if(data){
                resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, data, res);
            }else{
                resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, null, res);
            }
        }catch (e) {
            throw new Error(e);
        }
    }
    
    async removePermission(req, res){
        try{
            const id = req.params.id;
            const data = await RoleService.removePermission(id);
            resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, data, res);
        }catch (e) {
            resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, null, res);
        }
    }

    async saveRolePermission(req, res){
        try{
            const data = await RoleService.saveRolePermission(req.body);
            if(data){
                resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, data, res);
            }else{
                resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, null, res);
            }
        }catch (e) {
            resExport(MESSAGE.ERROR.status, MESSAGE.ERROR.message, null, res);
        }
    }
}

module.exports = new RoleController();