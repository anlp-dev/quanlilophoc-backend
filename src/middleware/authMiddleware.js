const jwt = require("jsonwebtoken");
const secret = require("../configs/secrets");
const { getPermissionsForUser } = require('../database/db');

const auth = async (req, res, next) => {
  try {
    // Check if Authorization header exists
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // Extract and validate token
    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        message: "Invalid token format"
      });
    }


    const decoded = jwt.verify(token, secret.JWT_SECRET_KEY);

    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      return res.status(401).json({
        message: "Token has expired"
      });
    }


    const permissions = await getPermissionsForUser(decoded.userId);


    req.permissions = permissions;
    req.account = decoded;

    next();

  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        message: "Token expired"
      });
    }

    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};

module.exports = auth;