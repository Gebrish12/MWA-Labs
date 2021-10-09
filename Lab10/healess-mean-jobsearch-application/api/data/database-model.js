const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
    country:{
        type:String,
        require:true
    },
    state:{
        type:String
    },
    city:String,
    zipcode:Number

})

const jobSearchingSchema = new mongoose.Schema ({
    title:String,
    salary:Number,
    description:String,
    exprience:String,
    skills:[String],
    postDate:Date,
    location:locationSchema
   
})

mongoose.model("Job",jobSearchingSchema,"jobs");