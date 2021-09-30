const express = require('express');
const controller = require('../controller')
const router = express.Router();

router.route("/games").get(controller.getAll)

//// additional self practice
.post(controller.addGame)

router.route("/games/:gameId").get(controller.getById)

module.exports=router;
