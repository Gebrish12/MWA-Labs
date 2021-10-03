const express = require("express");
const controller = require("../controller/car_controller");
const router = express.Router();

router.route("/cars").get(controller.getAll)
         .post(controller.addone)
         ;

router.route("/cars/:carID").get(controller.getOne)
.delete(controller.deleteOne)
.put(controller.updateOne);


module.exports =router;