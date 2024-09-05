const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res, status(401).json({ msg: "token not provided" });
  }
  // console.log(`token from auth middleware ${token}`);

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("this is token from middleware", jwtToken);
  try {
    const isVerified = jwtToken.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("this is verified data", isVerified);
    

    next();
  } catch (error) {
    return res.status(401), json({ msg: "token is invalid" });
  }
};

module.exports = authMiddleware;
