const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res, status(401).json({ msg: "token not provided" });
  }
 // console.log(`token from auth middleware ${token}`);

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("this is token from middleware", jwtToken)
  next();
};

module.exports = authMiddleware;
