const {resExport} = require('../../enums/resExport');
const authService = require('../../services/auth/authService')
class authController {
     async login(req, res){
          try{
               const res_data = await authService.loginUser(req);
               resExport(200, 'Đăng nhập tài khoản thành công !!!', res_data, res);
          }catch (e) {
               resExport(500, e.message, null, res);
          }
     }

     async register(req, res){
          try{
               const res_data = await authService.registerUser(req);
               resExport(200, 'Đăng ký tài khoản thành công !!!', res_data, res);
          }catch (e) {
               resExport(500, e.message, null, res);
          }
     }

     async logout(req, res){

     }
}

module.exports = new authController();