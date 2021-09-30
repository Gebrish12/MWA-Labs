const express = require('express');
const controller = require('../controller');
const router = express.Router();

router.route("/multiply/:number1").get(controller.multiplication);

module.exports=router;