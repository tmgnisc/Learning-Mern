const express = require("express")
const validate = require("../middleware/validate-middleware")
const router = express.router



router.route("/service").get(services)