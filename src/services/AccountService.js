const Error = require("../messages/errors/Error");
const Mess_Success = require("../messages/success/MessageSuccess");
const bcrypt = require("bcryptjs");
const Account = require("../models/Account");
const { v4: uuidv4 } = require("uuid");
const secret = require("../configs/secrets");
const jwt = require("jsonwebtoken");

class AccountService {
  async createAccount(accountData) {
    try {
      const { username, password, roleId, email, fullname } = accountData;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newAccountData = {
        username,
        password: hashedPassword,
        roleId,
        email,
        fullname,
        createdAt: new Date(),
      };

      if (roleId === "673abd7136ddc94d13817278") {
        newAccountData.teacherId = uuidv4();
      } else if (roleId === "673abd7136ddc94d13817279") {
        newAccountData.studentId = uuidv4();
      }

      const account = new Account(newAccountData);
      await account.save();
    } catch (error) {
      throw error; // Ném lỗi để controller xử lý
    }
  }

  // get token
  generateToken(userId) {
    const token = jwt.sign({ userId }, secret.JWT_SECRET_KEY); // Sửa dòng này
    return token;
  }
  // login
   login(req) {
    try {
      // const user_res = await Account.findById(req.user._id);
      // if (!user_res) {
      //   return {
      //     status: Error.USER_INVALID.status,
      //     message: Error.USER_INVALID.message,
      //   };
      // }

      // const isMatch = await bcrypt.compare(
      //   req.user.password,
      //   user_res.password
      // );
      // if (!isMatch) {
      //   return {
      //     status: Error.PASSWORD_INCORECT.status,
      //     message: Error.PASSWORD_INCORECT.message,
      //   };
      // }

      const token = this.generateToken(req.user._id);
      console.log(token)
      if (!token) {
        return {
          status: Error.LOGIN_FAIL.status,
          message: Error.LOGIN_FAIL.message,
        };
      }

      return {
        status: Mess_Success.LOGIN_SUCCESS.status,
        message: Mess_Success.LOGIN_SUCCESS.message,
        token: token,
      };
    } catch (error) {
      console.error("Lỗi trong quá trình login:", error);
      return {
        status: 500,
        message: "Lỗi server",
      };
    }
  }

  async getAccountByUserId(id) { 
    try {
      const res = await Account.findById(id);
      return res;
    } catch (error) {
      console.log(error);
      res.json({ status: error.status, message: error.message });
    }
  }
}

module.exports = new AccountService();
