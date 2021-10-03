const express = require("express");
const controller = require("../controller");
const router = express.Router();

router.route("/students").get(controller.getAll)
                    .post(controller.addStudent);

router.route("/students/:studentID").get(controller.getOne)
.delete(controller.deleteStudent)
.put(controller.updateStudent);

router.route("/students/:studentID/courses").get(controller.getAllCourses);

router.route("/students/:studentID/courses/:courseID").get(controller.getOneCourse)

module.exports =router;