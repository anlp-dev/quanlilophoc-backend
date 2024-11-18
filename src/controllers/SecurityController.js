const Error = require("../messages/errors/Error");
const Mess_Success = require("../messages/success/MessageSuccess");
const authMiddleware = require("../middleware/authMiddleware");
const AccountService = require("../services/AccountService");
class SecurityController {
  // [POST] /auth/register
  async register(req, res) {
    try {
      await AccountService.createAccount(req.body);
      res.status(Mess_Success.REGISTER_SUCCESS.status).json({
        status: Mess_Success.REGISTER_SUCCESS.status,
        message: Mess_Success.REGISTER_SUCCESS.message,
      });
    } catch (error) {
      res.status(500).json({ status: error.status, message: error.message });
    }
  }
  // [POST] /auth/login
  login(req, res) {
    try {
      const res_data = AccountService.login(req)
      console.log(res_data)
      res.json(res_data)
    } catch (error) {
      console.log(error)
      res.json({ status: error.status, message: error.message });
    }
  }
  // [GET] /auth/profile
  getAccountByToken(req, res) {
    res.json({
      status: Mess_Success.LOAD_ID_BY_TOKEN.status,
      message: Mess_Success.LOAD_ID_BY_TOKEN.message,
      data: req.account,
    });
  }

  async getAccountByUserId(req, res){
    try {
      const res_data = await AccountService.getAccountByUserId(req.params.id);
      res.json({
        status: 200,
        message: 'Load data user success',
        data: res_data
      })
    } catch (error) {
      console.log(error)
      res.json({ status: error.status, message: error.message });
    }
  }
}

module.exports = new SecurityController();
