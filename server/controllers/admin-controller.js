const User = require("../models/user-model");
const Contacts = require("../models/contact-model")

const getAllUsers = async (req, res, next) => {
  try {

    const users = await User.find().select("-password");

    console.log(users);
    
    if(!users || users.length === 0){
        return res.status(404).json({message: "no users found"})
    }
    res.status(200).json(users)
  } catch (error) {
    next(error);
  }
};


const getAllContacts = async (req, res, next) =>{
  try {
    const contacts = await Contacts.find()
  } catch (error) {
    next(error)
  }
}

module.exports = getAllUsers