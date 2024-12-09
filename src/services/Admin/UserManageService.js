const MESSAGE = require("../../messages/message")
const Account = require("../../models/accounts/Account")

class UserManageService {
    async getAllUser(){
        try{
            const res = await Account.find({}).populate("roleId").populate('teacherId').populate('studentId');
            if(res.length > 0){
                return res;
            }else{
                throw new Error(MESSAGE.FAIL.message);
            }
        }catch (e) {
            throw new Error(e);
        }
    }

    async updateUser(id, dataUser){
        try{
            const res = await Account.findByIdAndUpdate(id, dataUser);
            if(!res){
                throw new Error(MESSAGE.FAIL.message);
            }else{
                return res;
            }
        }catch (e) {
            throw new Error(e);
        }
    }

    async deleteUser(){

    }

    async addUser(){

    }

    async exportUser(){

    }
}

module.exports = new UserManageService();
