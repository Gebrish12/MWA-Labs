const mongoose = require("mongoose");
require('./student_model.js');

const dburl= process.env.DATABASE_URL+process.env.DATABASE_NAME;

mongoose.connect(dburl);

mongoose.connection.on("connected",function(){
    console.log("mongoose has successfully connected to",process.env.DATABASE_NAME);
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
