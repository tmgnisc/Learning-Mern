const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).send("this is home page using controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res
      .status(200)
      .json({
        message: "registration successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(400).send("Internal server error ");
  }
};


//user login logic 


const login = async (req, res) =>{
  try {
  
 const {email, password} = req.body
const userExist = await User.findOne({ email})
console.log(userExist)
if(!userExist){
  return res.status(400).json({message: "Invalid credentials"})
}

const user = await bcrypt.compare(password, userExist.password)
if(user){
  res.status(200).json({
    msg: "login successful",
    token: await userExist.generateToken(),
    userId: userExist._id.toString(),
  })
} else {
  res.status(401).json({message: "Invalid credentials"})
}

  } catch (error) {
    res.status(500).json("internal server error")
  }
}
module.exports = { home, register, login };
