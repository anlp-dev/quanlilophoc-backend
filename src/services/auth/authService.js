const User = require('../../models/user/User');
const bcrypt = require('bcrypt');
const STATUS_ACCOUNT = require('../../enums/statusAccount');
const secret = require("../../configs/secrets");
const jwt = require("jsonwebtoken");
class authService {
    async loginUser(req) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ username });
            if (!user) {
                throw new Error("Email hoặc mật khẩu không chính xác");
            }

            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                throw new Error("Mật khẩu không chính xác");
            }

            if (user.status === STATUS_ACCOUNT.INACTIVE) {
                throw new Error("Tài khoản chưa được kích hoạt, vui lòng kiểm tra email để kích hoạt");
            }

            if (user.status === STATUS_ACCOUNT.DELETED) {
                throw new Error("Tài khoản đã bị xóa !!!")
            }

            const payload = {
                userId: user._id,
                role: user.roleId,
                email: user.email
            };

            const token = this.generateToken(payload);
            if (!token) {
                throw new Error("Lỗi tạo token");
            }

            return token;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    async registerUser(req){
        try{
            const {username, password, email, phone, address, fullname, gender, dateOfBirth} = req.body;

            if(password.length < 8){
                throw new Error("Mật khẩu phải có ít nhất 8 kí tự !!!");
            }

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const user = new User({
                username,
                password: hashedPassword,
                email,
                phone,
                address,
                fullname,
                gender,
                dateOfBirth
            })
            user.roleId = '673abd7136ddc94d13817277';
            await user.save();
            return user;
        }catch (e) {
            throw new Error(e);
        }
    }

    async logoutUser(req){

    }

    generateToken(payload) {
        try {
            return jwt.sign(
                payload,
                secret.JWT_SECRET_KEY,
                {
                    expiresIn: '24h',
                    algorithm: 'HS256'
                }
            );
        } catch (error) {
            throw new Error("Lỗi khi tạo token");
        }
    }
}

module.exports = new authService();