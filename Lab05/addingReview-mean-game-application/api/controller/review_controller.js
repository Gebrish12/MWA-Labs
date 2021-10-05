const mongoose = require('mongoose');
const Games = mongoose.model("Games");

module.exports.addReview = function(req,res){
    console.log("adding review request has recieved");
    const gameID = req.params.gameID;

    if(!mongoose.Types.ObjectId.isValid(gameID)){
        console.log("invalid id");
        res.status(400).json({"message":"the id you provide does't satisfy database id"});
        return;
    }
    Games.findById(gameID).select("review").exec(function(err,Review){
        if(err){
            console.log("invalid request");
            res.status(500).json(err);
            return;
        }else {
             if(!Review){
                 res.status(404).json({"message":"the game is not found"});
                 return;
             }else{
                Review.reviews =req.body.reviews;
            
           
                Review.save(function(err,Review){
                    if(err){
                        res.status(400).json(err);
                    }else{
                        res.status(200).json(Review);
                    }
                })
             }
           
            
            
        }
    })
}