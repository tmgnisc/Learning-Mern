const home = async (req, res) =>{
    try {
        res.status(200).send("this is home page")
    } catch (error) {
        console.log(error)
        
    }
}

const register = async (req, res) =>{
    try {
        console.log(req.body)
        res.status(200).json({message:req.body})
    } catch (error) {
        res.status(400).send("this is error ")
    }
}
module.exports = {home, register}
