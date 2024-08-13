const express = require("express")
const app = express()
app.get("/", (req, res) => {

    res.status(200).send("welcome to nischal learning")
})  //default root page or home page, first argument homepage and second argument should be response
app.get("/register", (req, res) => {

    res.status(200).send("welcome to register page ")
}) 

const port = 5000

app.listen(port ,() =>{
    console.log(`server is running in port ${port}`)
})