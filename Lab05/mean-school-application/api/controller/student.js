const mongoose = require("mongoose");
const Students = mongoose.model("Student");

const getAll = function(req,res){
    console.log("get all request has recieved");
    var offset =0;
    var counter = 6;

    if (req.query && req.query.offset){
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.counter){
        var x =parseInt(req.query.counter);
        if(x>9){
            res.status(404).send("the count should not exceded morethan 9");
            return;
        }else{
            counter =x;
        }
    
    }
    if(isNaN(offset) || isNaN(counter)){
        console.log("the query offset and counter should be numbers");
        res.status(400).json({"message":"the query offset and counter should be numbers"})
        return;
    }
    Students.find().skip(offset).limit(counter).exec(function(err,students){
            if(err){
                res.status(500).send(err);
                return
            }else{
                res.status(200).json(students)
            }
        });

};

const getOne= function(req,res){
    console.log('get by id request recieved');
    const studentID = req.params.studentID;
    if(!mongoose.Types.ObjectId.isValid(studentID)){
        console.log("Invalid id");
        res.status(400).json({"message":"the id you provide does not satisfy id of mongodb"})
        return;
    }
    Students.findById(studentID).exec(function(err,student){
         if(err){
             console.log("error finding student");
             res.status(500).json(err);
             return;
         }else{
             if(!student){
                 console.log("can not find student",student);
                 res.status(404).json({"message":"student with the given id is not fount"})
                 return;
             }else{
                 console.log()
                res.status(200).json(student);
                }
         }
    })
   
};
const getAllCourses = function(req,res){
      console.log("get all courses request has received");
      const studentID = req.params.studentID;
      Students.findById(studentID).select("courses").exec(function(err,courses){
          if(err){
              console.log("invalid request");
              res.status(500).json(err);
              return;
          }else {
              res.status(200).json(courses);
          }
      })
}

const getOneCourse = function (req,res){
    console.log("get one course request has recieved");
    const studentID = req.params.studentID;
    const courseID = req.params.courseID;
    if (!mongoose.Types.ObjectId.isValid(courseID)){
        console.log("invalid course id");
        res.status(400).json(err);
        return;
    }
    //"{courses:{$elemMatch:{name:'fpp'}}}"
    Students.findById(studentID).select("courses").exec(function(err,course){
        
        
        if(err){
            console.log("the course can not be found");
            res.status(500).json(err);
            return;
        }else{
            console.log(course.courses.length);
            for (let i=0;i<course.courses.length;i++){
               if(course.courses[i].id==courseID){
                res.status(200).json(course.courses[i]);
                return;
               }
            }

           
        }
    })
}
module.exports = {
    getAll:getAll,
    getOne:getOne,
    getAllCourses:getAllCourses,
    getOneCourse:getOneCourse
}