const Error = require("../messages/errors/Error");
const Mess_Success = require("../messages/success/MessageSuccess");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secrets");
const bcrypt = require("bcryptjs");
const Account = require("../models/Account");
const authMiddleware = require("../middleware/authMiddleware");
const passport = require("passport");
class SecurityController {
  // [POST] /auth/register
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const account = new Account({
        username: username,
        password: hashedPassword,
      });
      await account.save();

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
    const token = jwt.sign({ userId: req.user._id }, secret.JWT_SECRET_KEY);
    if (!token) {
      return res.json({
        status: Error.LOGIN_FAIL.status,
        message: Error.LOGIN_FAIL.message,
      });
    }
    res.json({
      status: Mess_Success.LOGIN_SUCCESS.status,
      message: Mess_Success.LOGIN_SUCCESS.message,
      token: token,
    });
  }
  // [GET] /auth/profile
  getAccountByToken(req, res) {
    res.json({
      status: Mess_Success.LOAD_ID_BY_TOKEN.status,
      message: Mess_Success.LOAD_ID_BY_TOKEN.message,
      data: req.account,
    });
  }
}

module.exports = new SecurityController();
