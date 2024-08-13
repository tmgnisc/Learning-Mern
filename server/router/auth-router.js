const express = require("express")
const  router = express.Router()

// app.get("/", (req, res) =>{
//     res.send("welcome")
// })



router.route("/").get((req, res) =>{
res.status(200).send("welcome using router")
})

router.route("/register").get((req, res) =>{
    res.status(200).send("this is register page")
})
module.exports = router;
