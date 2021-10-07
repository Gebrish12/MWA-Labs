const express = require("express");
const controller = require("../controller");
const router = express.Router();

router.route("/games").get(controller.getAll)
.post(controller.addone);
                    

router.route("/games/:gameID").get(controller.getOne)
.delete(controller.deleteOne)
.put(controller.updateOne)

module.exports =router;