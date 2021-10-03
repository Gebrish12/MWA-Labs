const mongoose = require("mongoose");
require('./games_model.js');
const dbName= "meanGamesdb";
const dburl= "mongodb://localhost:27017/"+dbName;

mongoose.connect(dburl);

mongoose.connection.on("connected",function(){
    console.log("mongoose has successfully connected to",dbName);
});
mongoose.connection.on("disConnected",function(){
    console.log("mongoose has successfully disConnected");
});
mongoose.connection.on("error",function(){
    console.log("mongoose connection error");
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
