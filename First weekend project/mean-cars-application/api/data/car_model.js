const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    data_production:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    brand:String,
    mileage:Number
})


mongoose.model("Car",carSchema,"cars");