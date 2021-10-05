const mongoose = require ("mongoose");

const Students = mongoose.model("Student");

const getAllCourses = function(req,res){
    console.log("get all courses request has received");
    const studentID = req.params.studentID;

    if(!mongoose.Types.ObjectId.isValid(studentID)){
        console.log("invalid id");
        res.status(400).json({"message":"the id you provide does't satisfy database id"});
        return;
    }
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
  if (!mongoose.Types.ObjectId.isValid(studentID)){
      console.log("invalid course id");
      res.status(400).json(err);
      return;
  }
  if (!mongoose.Types.ObjectId.isValid(courseID)){
      console.log("invalid course id");
      res.status(400).json(err);
      return;
  }
  
  Students.findById(studentID).select("courses").exec(function(err,student){
      
      if(err){
          console.log("the course can not be found");
          res.status(500).json(err);
          return;
      }else{
          console.log(student.courses.length);
          if (student.courses.id(courseID)){
            res.status(200).json(student.courses.id(courseID))
          }else{
              res.status(404).json("the student with the given id is not available")
          }

          }

         
      
  })
};
const addCourse = function (req,res){
    console.log("adding course request has recieved");
    const studentID = req.params.studentID;
    if (!mongoose.Types.ObjectId.isValid(studentID)){
             res.status(400).json("the id that you provide doesn't satisfy the student id");
             return;
    }

    Students.findById(studentID).select("courses").exec(function(err,student){
        if(err){
            res.status(500).json(err);
            return;
        }else if(!student){
            res.status(404).json("the student can not be found");
            return
        }else{
            student.courses.push(req.body);
            student.save(function(err,result){
                if(err){
                    res.status(500).json(err);
                    return;
                }else{
                    res.status(200).json(result);
                }
            })
        }
    })
};

const deleteCourse = function(req,res){
    console.log("deleting course request has recieved");
    const studentID = req.params.studentID;
    const courseID = req.params.courseID;
    if (!mongoose.Types.ObjectId.isValid(studentID)){
             res.status(400).json("the id that you provide doesn't satisfy the student id");
             return;
    }
    if (!mongoose.Types.ObjectId.isValid(courseID)){
             res.status(400).json("the id that you provide doesn't satisfy the student id");
             return;
    }
    Students.findById(studentID).select("courses").exec(function(err,student){
        if(err){
            res.status(500).json(err);
            return;
        }else if(!student){
            res.status(404).json("the student can not be found");
            return;
        }else{
            console.log(student.courses.id(courseID));
            student.courses.id(courseID).remove();
              student.save(function(err){
                  if(err){
                      res.status(500).json(err);
                      return;
                  }else{
                      res.status(200).json("course deleted successfully");
                  }
              });
        }
    })

};

 const updateCourse = function(req,res){
    console.log("updating a course has recieved");
    const studentID = req.params.studentID;
    const courseID = req.params.courseID;
    if (!mongoose.Types.ObjectId.isValid(studentID)){
             res.status(400).json("the id that you provide doesn't satisfy the student id");
             return;
    }
    if (!mongoose.Types.ObjectId.isValid(courseID)){
             res.status(400).json("the id that you provide doesn't satisfy the student id");
             return;
    }
    Students.findById(studentID).select("courses").exec(function(err,student){
        if(err){
            res.status(500).json(err);
            return;
        }else if(!student){
            res.status(404).json("the student can not be found");
            return;
        }else{
                 const course =student.courses.id(courseID);
                    if (course){
                        course.name=req.body.name;
                        student.save(function(err,result){
                            if(err){
                                res.status(500).json(err);
                                return;
                            }else{
                                res.status(200).json(result);
                            }
                        })

                      }else{
                          res.status(404).json("the student with the given id is not available")
                      }
                      
                      
                  
              
        }
    })
}

module.exports = {
    
    getAllCourses:getAllCourses,
    getOneCourse:getOneCourse,
    addCourse:addCourse,
    deleteCourse:deleteCourse,
    updateCourse:updateCourse
   
}
