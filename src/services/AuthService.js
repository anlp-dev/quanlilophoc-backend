// AuthService.js
const secret = require("../configs/secrets");
const jwt = require('jsonwebtoken');

class AuthService {

  generateToken(userId) {
    try {
      return jwt.sign({ userId: userId }, secret.JWT_SECRET_KEY, { expiresIn: '1h' });
    } catch (error) {
      console.error("Lỗi khi tạo token:", error);
      return null;
    }
  }
}

module.exports = new AuthService();
