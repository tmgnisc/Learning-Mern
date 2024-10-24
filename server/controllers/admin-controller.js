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
    if(!contacts || contacts.length === 0){
      return res.status(404).json({message:"no contacts details found"})
    }
    res.status(200).json(contacts)
  } catch (error) {
    next(error)
  }
}


const deleteUser = async (req, res, next) => {
  const userId = req.params.id; // Get the user ID from the request parameters
  try {
    const user = await User.findByIdAndDelete(userId); // Delete the user by ID

    if (!user) {
      return res.status(404).json({ message: "User not found" }); // User not found
    }

    res.status(200).json({ message: "User deleted successfully" }); // Success message
  } catch (error) {
    next(error); // Pass the error to the error middleware
  }
};

module.exports = {getAllUsers, getAllContacts, deleteUser}