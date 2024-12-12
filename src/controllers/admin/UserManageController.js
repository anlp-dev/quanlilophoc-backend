const MESSAGE = require("../../messages/message")
const UserManageService = require("../../services/Admin/UserManageService")
const {resExport} = require("../../enums/resExport")
class UserManageController {
    async getAll(req, res){
        try{
            const res_data = await UserManageService.getAllUser();
            resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, res_data, res);
        }catch (e) {
            resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, res);
        }
    }

    async updateUser(req, res){
        try{
            const id = req.params.id;
            const dataUser = req.body;
            const res_data = await UserManageService.updateUser(id, dataUser);
            resExport(MESSAGE.SUCCESS.status, MESSAGE.SUCCESS.message, res_data, res);
        }catch (e) {
            resExport(MESSAGE.FAIL.status, MESSAGE.FAIL.message, res)
        }
    }

    async add(req, res){

    }

    async delete(req, res){

    }

    async export(req, res){

    }
}

module.exports = new UserManageController();