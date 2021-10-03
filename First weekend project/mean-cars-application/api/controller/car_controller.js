const mongoose = require("mongoose");
const Car = mongoose.model("Car");

const getAll = function(req,res){
    console.log("get all request recieved");
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

    Car.find().skip(offset).limit(counter).exec(function(err,cars){
        if(err){
            res.status(500).json({"message":"the collections of the cars can not be found"});
            return;
        }else {
            res.status(200).json(cars);
        }
    })


}

const getOne = function(req,res){
       console.log("get one car request has recieved");
       const carID =req.params.carID;
     if(!mongoose.Types.ObjectId.isValid(carID)){
         console.log("the given id doesn't satisfiy the id of the database");
         res.status(400).json({"message":"the given id doesn't satisfiy the id of the database"});
         return
     }

     Car.findById(carID).exec(function(err,car){
         if(err){
             res.status(500).json("the car with the given id is unavailable");
             return;
         }else {
            if(!car){
                res.status(404).json("invalid cars");
                return;
            }else{
                res.status(200).json(car);
            }
        }
     })
}

const addone = function(req,res){
    console.log("adding car request has recieved");
    const newCar ={
        name:req.body.name,
        date_production :req.body.date_production,
        price:req.body.price,
        brand:req.body.brand,
        mileage:req.body.mileage
    }
    Car.create(newCar,function(err,newCar){
        if(err){
            res.status(500).json("adding the car unsuccessful");
            return;
        }else{
            res.status(200).json(newCar);
        }
    });
}

const deleteOne = function(req,res){
    console.log("deleting one car request has recieved");
    const carID =req.params.carID;
    if(!mongoose.Types.ObjectId.isValid(carID)){
        console.log("the given id doesn't satisfiy the id of the database");
        res.status(400).json({"message":"the given id doesn't satisfiy the id of the database"});
        return
    }

    Car.findByIdAndRemove(carID).exec(function(err){
        if(err){
            res.status(500).json("the car with the given id is unavailable");
            return;
        }else{
            res.status(200).json("deleted successfully");
        }
    })

}

const updateOne = function(req,res){
    console.log("updating the car request has recieved");
    const carID =req.params.carID;
    console.log(carID);
    if(!mongoose.Types.ObjectId.isValid(carID)){
        console.log("the given id doesn't satisfiy the id of the database");
        res.status(400).json({"message":"the given id doesn't satisfiy the id of the database"});
        return
    }


    Car.findById(carID).exec(function(err,car){
        if(err){
            res.status(500).json("the car with the given id is unavailable");
            return;
        }else{
            if(!car){
                res.status(404).json("invalid cars");
                return;
            }else{
                car.name=req.body.name,
                car.date_production =req.body.date_production,
                car.price=req.body.price,
                car.brand=req.body.brand,
                car.mileage=req.body.mileage
            
            car.save(function(err,updateCar){
                if(err){
                    res.status(500).json(err);
                }else{
                    res.status(200).json(updateCar);
                }
            })
        }
        }
    })

}

module.exports = {
    getAll:getAll,
    getOne:getOne,
    addone:addone,
    deleteOne:deleteOne,
    updateOne:updateOne
}
