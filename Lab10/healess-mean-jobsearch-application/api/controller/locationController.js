const mongoose = require("mongoose")

const Job = mongoose.model("Job");

const getLocation = function(req,res){
    console.log("get location request has recieved");
    const jobID = req.params.jobID;

    if(!mongoose.Types.ObjectId.isValid(jobID)){
        res.status(500).json("invalid id");
        return;
    }
    Job.findById(jobID).select("location").exec(function(err,location){
        if(err){
            res.status(500).json(err);
            return;
        }else{
            if(!location){
                res.status(404).json("location not found");
                return;
            }else{
                res.status(200).json(location);
            }
            
        }
    })
};

const addLocation = function (req,res){
    console.log("adding location request recieved");
    const jobID = req.params.jobID;
    if(!mongoose.Types.ObjectId.isValid(jobID)){
        res.status(500).json("invalid id");
        return;
    }
    Job.findById(jobID).select("location").exec(function(err,job){
        if(err){
            res.status(500).json(err);
            return;
        }else{
            if(!job){
                res.status(404).json("job not found");
                return;
            }else{
           job.location =req.body;
            job.save( job.location,function(err,newLocation){
                if(err){
                    res.status(500).json(err);
            return;
                }else{
                    res.status(200).json(newLocation);
                }
            })
        }
        }
    })

}

const deleteLocation = function(req,res){
    console.log("deleting a job request recieved");
    console.log("get location request has recieved");
    const jobID = req.params.jobID;
    const locationID = req.params.locationID

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
                res.status(404).json("job not found");
                return;
            }else{
                job.location.remove();
                job.save(function(err){
                   if(err){
                       res.status(500).json(err);
                       return;
                   }else{
                       res.status(200).json("deleted successfully");
                   }
                })
               
            }
            
        }
    })

}

module.exports = {
    getLocation :getLocation,
    addLocation : addLocation,
    deleteLocation :deleteLocation
   
}

