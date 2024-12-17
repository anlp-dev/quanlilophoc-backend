const Error = require("../messages/errors/Error");
const Mess_Success = require("../messages/success/MessageSuccess");
const bcrypt = require("bcryptjs");
const Account = require("../models/accounts/Account");
const { v4: uuidv4 } = require("uuid");
const secret = require("../configs/secrets");
const jwt = require("jsonwebtoken");
const ROLE = require('../enums/role');
const Teacher = require("../models/class/Teacher");
const Student = require("../models/class/Student");
const STATUS_ACCOUNT = require('../enums/statusAccount');

class AccountService {
  async updateAccount(accountData, id){
    try {
      const {address, dateOfBirth, fullname, gender, phone} = accountData;
      const account = await Account.findById(id).populate('roleId');
      let account_res;
      if(!account){
        return {
          success: false,
          status: 404,
          message: 'Không tìm thấy tài khoản !!!',
        }
      }
      account.fullname = fullname;
      account.updateAt = new Date();
      await account.save();
      if(account.roleId.code === ROLE.TEACHER_CODE){
        const teacher = await Teacher.findById(account.teacherId);
        teacher.address = address;
        teacher.phoneNumber = phone;
        teacher.dateOfBirth = dateOfBirth;
        teacher.gender = gender;
        await teacher.save();
        account_res = await account.populate('teacherId'); 
      }else if(account.roleId.code === ROLE.STUDENT_CODE){
        const student = await Student.findById(account.studentId);
        student.address = address;
        student.phoneNumber = phone;
        student.dateOfBirth = dateOfBirth;
        student.gender = gender;
        await student.save();
        account_res = await account.populate('studentId'); 
      }
      return {
        success: true,
        status: 200,
        message: 'Thay đổi thông tin người dùng thành công !!!',
        data: account_res
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: 'Lỗi hệ thống !!!'
      }
    }
  }


  async createAccount(accountData) {
    try {
      const { username, password, roleId, email, fullname } = accountData;
      const hashedPassword = await bcrypt.hash(password, 10);
      const status = "00";

      const newAccountData = {
        username,
        password: hashedPassword,
        roleId,
        email,
        fullname,
        status: STATUS_ACCOUNT.INACTIVE,
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
   async login(req) {
    try {
      const user = await Account.findOne({ id: req.user._id });
      // console.log(user)
      if(user?.status === STATUS_ACCOUNT.INACTIVE){
          return {
            status: 400,
            message: 'Tài khoản của bạn chưa được kích hoạt, vui lòng truy cập gmail để kích hoạt tài khoản'
          }
      }
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
