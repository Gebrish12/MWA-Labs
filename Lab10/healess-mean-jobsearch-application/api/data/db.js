require("dotenv").config({"path":".env"});
const mongoose = require("mongoose");
require("./database-model")

const dbUrl = process.env.DATABASE_URL + process.env.DATABASE_NAME;

mongoose.connect(dbUrl);

mongoose.connection.on("connected",function(){
    console.log("mongoose has successfully connected to",process.env.DATABASE_NAME);
});
mongoose.connection.on("disConnected", function(){
    console.log("mongoose has successfully disconnected");
});

mongoose.connection.on("error",function(){
    console.log("connection failed")
});

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