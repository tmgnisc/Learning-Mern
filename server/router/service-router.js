const express = require("express")
const router = express.router()
const services = require("../controllers/service-controller")



router.route("/service").get(services)