const express = require("express");
const controller = require("../controller");
const router = express.Router();

router.route("/games").get(controller.getAll)
                    

router.route("/games/:gameID").get(controller.getOne)

module.exports =router;