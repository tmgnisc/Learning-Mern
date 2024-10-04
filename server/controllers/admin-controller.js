const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
  } catch (error) {
    next(error);
  }
};
