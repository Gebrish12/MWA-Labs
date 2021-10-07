const mongoose = require("mongoose");
require("./car_model");
const dburl= process.env.DATABASE_URL +process.env.DATABASE_NAME;

mongoose.connect(dburl);

mongoose.connection.on("connected",function(){
    console.log("the mongodb has successfully connected to",process.env.DATABASE_NAME);
})
// mongoose.connection.close("disConnected",function(){
//     console.log("the mongodb has successfully disConnected");
// })
mongoose.connection.on("error",function(){
    console.log("the mongodb connection  is unsuccessfully");
})


process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log("mongoose has disconnected by the termination")
    }) 
})
process.on("SIGUSR2",function(){
    mongoose.connection.close(function(){
        console.log("mongoose has disconnected by the restart");
        process.kill(process.pid,"SIGUSR2");
    }) 
})