const mongoose = require('mongoose');
const Games = mongoose.model("Games");
const getPublisher = function(req,res){
    console.log("get all publisher request has received");
    const gameID = req.params.gameID;

    if(!mongoose.Types.ObjectId.isValid(gameID)){
        console.log("invalid id");
        res.status(400).json({"message":"the id you provide does't satisfy database id"});
        return;
    }
    Games.findById(gameID).select("publisher").exec(function(err,publisher){
        if(err){
            console.log("invalid request");
            res.status(500).json(err);
            return;
        }else {
            res.status(200).json(publisher);
        }
    })
};

const addPublisher = function (req,res){
    console.log("adding publisher request has recieved");
    const gameID = req.params.gameID;

    if(!mongoose.Types.ObjectId.isValid(gameID)){
        console.log("invalid id");
        res.status(400).json({"message":"the id you provide does't satisfy database id"});
        return;
    }
    Games.findById(gameID).select("publisher").exec(function(err,Publisher){
        if(err){
            console.log("invalid request");
            res.status(500).json(err);
            return;
        }else {
             if(!Publisher){
                 res.status(404).json({"message":"the game is not found"});
                 return;
             }else{
                Publisher.publisher =req.body.publisher;
            
           
                Publisher.save(function(err,Publisher){
                    if(err){
                        res.status(400).json(err);
                    }else{
                        res.status(200).json(Publisher);
                    }
                })
             }
           
            
            
        }
    })
}

module.exports = {
    getPublisher:getPublisher,
    addPublisher:addPublisher
}