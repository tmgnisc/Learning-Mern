const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res, status(401).json({ msg: "token not provided" });
  }
  // console.log(`token from auth middleware ${token}`);

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("this is token from middleware", jwtToken);
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVerified.email });
    select({ password: 0 });
    console.log("this is verified data", userData);
req.user = userData 
req.token = token
req.userID = userData._id
    next();
  } catch (error) {
    return res.status(401).json({ msg: "token is invalid" });
  }
};

module.exports = authMiddleware;
