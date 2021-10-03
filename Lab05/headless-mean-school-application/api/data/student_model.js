const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name :String,

});
const studentSchema = new mongoose.Schema({
    name: {
       type: String,
       
    },
    gpa:Number,
    courses:[courseSchema]

});

mongoose.model("Student",studentSchema,"students");