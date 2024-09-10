const ServiceDetails = require("../models/service-model")
const services = async (req, res) =>{
    try {
        const response = await ServiceDetails.find()
        if(!response)
        res.status(200).json({msg: response})
    } catch (error) {
        return res.status(500).json({msg:"this is error service is interrupted due to", error})
    }
}