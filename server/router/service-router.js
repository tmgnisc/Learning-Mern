const express = require("express");

const services = require("../controllers/service-controller");
const router = express.Router();
router.route("/service").get(services);
router.get("/service", (req, res) => {
  res.status(200).json({ msg: "service route is working" });
});
module.exports = router;
