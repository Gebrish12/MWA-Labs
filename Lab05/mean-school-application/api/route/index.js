const express = require("express");
const controller = require("../controller/student");
const router = express.Router();

router.route("/students").get(controller.getAll)
                    

router.route("/students/:studentID").get(controller.getOne)

router.route("/students/:studentID/courses").get(controller.getAllCourses);

router.route("/students/:studentID/courses/:courseID").get(controller.getOneCourse)

module.exports =router;