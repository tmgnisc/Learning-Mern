const User = require('../models/user-model')
const home = async (req, res) =>{
    try {
        res.status(200).send("this is home page using controller")
    } catch (error) {
        console.log(error)
        
    }
}

const register = async (req, res) =>{
    try {
        // console.log(req.body)
        const {username, email, phone, password} = req.body;
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({msg:"email already exists"})
        }
const userCreated = await User.create({username, email, phone, password})
        res.status(200).json({message: userCreated})
    } catch (error) {
        res.status(400).send("this is error ")
    }
}
module.exports = {home, register}
