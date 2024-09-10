const express = require("express")
const services = require("../controllers/service-controller")
const router = express.router



router.route("/service").get(services)