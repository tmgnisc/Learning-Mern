const express = require("express")
const  router = express.Router()

// app.get("/", (req, res) =>{
//     res.send("welcome")
// })

router.get("/", (req, res) =>{
    res.status(200).send("welcome using router")
})

module.exports = router;
