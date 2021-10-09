const express = require("express");

const jobController = require("../controller/jobController");
const locationController =  require("../controller/locationController")

const router = express.Router();

router.route("/job").get(jobController.getAll)
.post(jobController.addOne);

router.route("/job/:jobID").get(jobController.getOne)
.delete(jobController.deleteOne)
.put(jobController.updateOne);

router.route("/job/:jobID/location").get(locationController.getLocation)
.post(locationController.addLocation);
router.route("/job/:jobID/location").delete(locationController.deleteLocation)



module.exports = router;