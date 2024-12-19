const Error = require("../../messages/errors/Error");
const Mess_Success = require("../../messages/success/MessageSuccess");
const RoleService = require("../../services/account/RoleService");

class RoleController {
  async getAll(req, res){
    try {
      const res_data = await RoleService.getRole();
      res.json({
        status: Mess_Success.GET_ROLE.status,
        message: Mess_Success.GET_ROLE.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      })
    }
  }
}

module.exports = new RoleController();
