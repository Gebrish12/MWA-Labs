const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name :String,
    country :String

});
const ReviewSchema = new mongoose.Schema({
    name:String,
    review:String,
    date:Date
})
const gameSchema = new mongoose.Schema({
    title: {
       type: String,
        required:true
    },
    price: Number,
    minAge:Number,
    designers:[String],
    rate:{
        type:Number,
        min:1,
        max:5,
        "default":1
    }, 
    review:[ReviewSchema],
    publisher:publisherSchema

});

mongoose.model("Games",gameSchema,"games");