const Error = require("../../messages/errors/Error");
const Mess_Success = require("../../messages/success/MessageSuccess");
const AccountService = require("../../services/account/AccountService");

class AccountProfileController {
  async updateAccount(req, res) {
    try {
      const result = await AccountService.updateAccount(req.body, req.params.id)
      if(result.success){
        res.json({
          status: result.status,
          message: result.message,
          data: result.data
        })
      }else{
        res.json({
          status: result.status,
          message: result.message
        })
      }
    } catch (error) {
      res.json(error)
    }
  }
}

module.exports = new AccountProfileController();

