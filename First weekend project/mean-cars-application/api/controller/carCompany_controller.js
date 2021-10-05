const mongoose = require("mongoose");
const Company = mongoose.model("Company");

const getAll = function(req,res){
    console.log("get all company request recieved");
    var offset =0;
    var counter = 6;

    if(req.query && req.query.offset){
        offset = req.query.offset;
    }
    if(req.query && req.query.counter){
        counter = req.query.counter;
    }

    if(isNaN(offset) || isNaN(counter)){
        res.status(400).json({"message":"the offset and counter query must be numbers"});
        return;
    }

    Company.find().skip(offset).limit(counter).exec(function(err,companies){
        if(err){
            res.status(500).json({"message":"the collections of the companies can not be found"});
            return;
        }else {
            res.status(200).json(companies);
        }
    })


}

const getOne = function(req,res){
       console.log("get one company request has recieved");
       const companyID =req.params.companyID;
     if(!mongoose.Types.ObjectId.isValid(companyID)){
         console.log("the given id doesn't satisfiy the id of the database");
         res.status(400).json({"message":"the given id doesn't satisfiy the id of the database"});
         return
     }

     Company.findById(companyID).exec(function(err,car){
         if(err){
             res.status(500).json("the company with the given id is unavailable");
             return;
         }else {
            if(!car){
                res.status(404).json("invalid company");
                return;
            }else{
                res.status(200).json(car);
            }
        }
     })
}

const addone = function(req,res){
    console.log("adding company request has recieved");
    const newCompany ={
        name:req.body.name,
        country:req.body.country,
        rating:req.body.rating
    }
    Company.create(newCompany,function(err,newCompany){
        if(err){
            res.status(500).json("adding the car unsuccessful");
            return;
        }else{
            res.status(200).json(newCompany);
        }
    });
}

const deleteOne = function(req,res){
    console.log("deleting one car request has recieved");
    const companyID =req.params.companyID;
    if(!mongoose.Types.ObjectId.isValid(companyID)){
        console.log("the given id doesn't satisfiy the id of the database");
        res.status(400).json({"message":"the given id doesn't satisfiy the id of the database"});
        return
    }

    Company.findByIdAndRemove(companyID).exec(function(err){
        if(err){
            res.status(500).json("the company with the given id is unavailable");
            return;
        }else{
            res.status(200).json("deleted successfully");
        }
    })

}

const updateOne = function(req,res){
    console.log("updating the car request has recieved");
    const companyID =req.params.companyID;
    console.log(companyID);
    if(!mongoose.Types.ObjectId.isValid(companyID)){
        console.log("the given id doesn't satisfiy the id of the database");
        res.status(400).json({"message":"the given id doesn't satisfiy the id of the database"});
        return
    }


    Company.findById(companyID).exec(function(err,company){
        if(err){
            res.status(500).json("the company with the given id is unavailable");
            return;
        }else{
            if(!company){
                res.status(404).json("invalid companys");
                return;
            }else{
                company.name=req.body.name,
                company.country =req.body.country,
                company.rating=req.body.rating,
                
            
            company.save(function(err,updatecompany){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(200).json(updatecompany);
                }
            })
        }
        }
    })

}

module.exports = {
    getAllCompany:getAll,
    getOneCompany:getOne,
    addoneCompany:addone,
    deleteOneCompany:deleteOne,
    updateOneCompany:updateOne
}
