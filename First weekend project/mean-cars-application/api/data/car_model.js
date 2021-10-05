const mongoose = require("mongoose");

const carModelSchema = new mongoose.Schema({
    name:String,
    data_production:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    mileage:Number
})

const carCompanySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    country:String,
    rating:Number,
    carModels:[carModelSchema]
    
})


mongoose.model("Company",carCompanySchema,"companies");