const express = require("express")
const  router = express.Router()
const authControllers = require('../controllers/auth-controller')


// app.get("/", (req, res) =>{
//     res.send("welcome")
// })



router.route("/").get(authControllers.home)

router.route("/register").post(authControllers.register)
module.exports = router;
