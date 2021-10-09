
const mongoose = require("mongoose");

const Job = mongoose.model("Job");

const getAll = function(req,res){
       console.log("get all request has recieved");
       var offset =0;
       var counter = 10;
       if(isNaN(offset) || isNaN(counter)){
           res.status(500).json("the offset and counter query must be numbers");
           return;
       }
       if(req.query && req.query.offset){
           offset = parseInt(req.query.offset);
       }
       if(req.query && req.query.counter){
           counter = parseInt(req.query.counter);
       }

       Job.find().skip(offset).limit(counter).exec(function(err,job){
            if(err){
                res.status(500).json(err);
                return;
            }else {
                res.status(200).json(job);
            }
       })
};

const addOne = function (req,res){
    console.log("adding job request is recieved");
    
    const newJob = {
        title:req.body.title,
        salary:req.body.salary,
        description:req.body.description,
        postDate:req.body.postDate,
        exprience:req.body.exprience,
        skills :req.body.skills
    }

    Job.create(newJob,function(err,newJob){
        if(err){
            res.status(500).json(err);
            return;
        }else{
            res.status(200).json(newJob);
        }
    })
}

const getOne =  function (req,res){
     console.log("get one request has received");
     const jobID = req.params.jobID;

     if(!mongoose.Types.ObjectId.isValid(jobID)){
         res.status(500).json("the id does not match");
         return;
     }

     Job.findById(jobID).exec(function(err,job){
         if(err){
             res.status(404).json(err);
             return;
         }else{
             if(!job){
                 res.status(500).json("can not find job");
                 return
             }else{
                 res.status(200).json(job);
             }
         }
     })
};

const deleteOne = function(req,res) {
    console.log("deleting a job request has recieved");
    const jobID = req.params.jobID;
    if(!mongoose.Types.ObjectId.isValid(jobID)){
        res.status(500).json("invalid id");
        return;
    }

    Job.findByIdAndRemove(jobID,function(err){
        if(err){
            res.status(500).json(err);
            return;
        }else{
            res.status(200).json("deleted successfully");
        }
    })
};

const updateOne = function(req,res){
    console.log("updating a job request has recived");
    const jobID = req.params.jobID;
    if(!mongoose.Types.ObjectId.isValid(jobID)){
        res.status(500).json("invalid id");
        return;
    }

    Job.findById(jobID).exec(function(err,job){
        if(err){
            res.status(500).json(err);
            return;
        }else{
            if(!job){
                res.status(404).json("can not find the job");
                return;
            }else{
                job.title = req.body.title;
                job.salary = req.body.salary;
                job.description =req.body.description;
                job.postDate = req.body.postDate,
                job.exprience =req.body.exprience

                job.save(function(err,newjob){
                    if(err){
                        res.status(500).json(err);
                        return;
                    }else{
                        res.status(200).json(newjob);
                    }
                })
            }
        }
    })
}

module.exports = {
     getAll : getAll,
     addOne : addOne,
     getOne : getOne,
     deleteOne : deleteOne,
     updateOne : updateOne
}