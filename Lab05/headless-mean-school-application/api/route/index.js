const express = require("express");
const studentController = require("../controller/studentController");
const courseController = require("../controller/courseController");
const router = express.Router();

router.route("/students").get(studentController.getAll)
                    .post(studentController.addStudent);

router.route("/students/:studentID").get(studentController.getOne)
.delete(studentController.deleteStudent)
.put(studentController.updateStudent);

router.route("/students/:studentID/courses").get(courseController.getAllCourses)
.post(courseController.addCourse);

router.route("/students/:studentID/courses/:courseID").get(courseController.getOneCourse)
.delete(courseController.deleteCourse)
.put(courseController.updateCourse);

module.exports =router;