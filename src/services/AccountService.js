const Error = require("../messages/errors/Error");
const Mess_Success = require("../messages/success/MessageSuccess");
const bcrypt = require("bcryptjs");
const Account = require("../models/Account");
const { v4: uuidv4 } = require("uuid");
const secret = require("../configs/secrets");
const jwt = require("jsonwebtoken");
const ROLE = require('../enums/role');
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

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

      let relatedData;

      if (roleId === ROLE.TEACHER) {
        const teacher = new Teacher();
        relatedData = await teacher.save();
        newAccountData.teacherId = relatedData._id;
      } else if (roleId === ROLE.STUDENT) {
        const student = new Student();
        relatedData = await student.save();
        newAccountData.studentId = relatedData._id;
      }

      const account = new Account(newAccountData);
      await account.save();
      if(relatedData){
        relatedData.accountId = account._id;
        await relatedData.save();
      }
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
      const res = await Account.findById(id).populate("roleId").populate('teacherId').populate('studentId');
      return res;
    } catch (error) {
      console.log(error);
      res.json({ status: error.status, message: error.message });
    }
  }
}

module.exports = new AccountService();
