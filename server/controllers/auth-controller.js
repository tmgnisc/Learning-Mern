const home = async (req, res) =>{
    try {
        res.status(200).send("this is home page")
    } catch (error) {
        console.log(error)
        
    }
}

const register = async (req, res) =>{
    try {
        res.status(200).send("this is register page using controller")
    } catch (error) {
        res.status(400).send("this is error ")
    }
}
module.exports = {home, register}
