const express = require("express");
const carModelcontroller = require("../controller/carModel_controller");
const Companycontroller = require("../controller/carCompany_controller");
const router = express.Router();

router
  .route("/company")
  .get(Companycontroller.getAllCompany)
  .post(Companycontroller.addoneCompany);

router
  .route("/company/:companyID")
  .get(Companycontroller.getOneCompany)
  .delete(Companycontroller.deleteOneCompany)
  .put(Companycontroller.updateOneCompany);

router
  .route("/company/:companyID/cars")
  .get(carModelcontroller.getAllcars)
  .post(carModelcontroller.addcar);

router
  .route("/company/:companyID/cars/:carID")
  .get(carModelcontroller.getOnecar)
  .delete(carModelcontroller.deletecar)
  .put(carModelcontroller.updatecar);

module.exports = router;
