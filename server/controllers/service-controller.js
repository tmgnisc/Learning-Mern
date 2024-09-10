const ServiceDetails = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await ServiceDetails.find();

    // Check if the response is empty
    if (response.length === 0) {
      return res.status(404).json({ msg: "No services found" });
    }

    // If data exists, return the response
    res.status(200).json(response);

  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Service is interrupted due to an error", error });
  }
};

module.exports = services;
