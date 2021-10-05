require("dotenv").config({"path":".env"});
const express = require("express");
const path = require("path");
require("./api/data/db");
const route = require ("./api/route");
const app = express();

if (isNaN(process.env.PORT)){
    process.env.PORT =4000;
}
app.set("port",process.env.PORT || 6000) ;

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use("/",express.static(path.join(__dirname,"public")))
app.use("/api",route);


const server = app.listen(app.get("port"),function(){
    console.log("server has started at ",server.address().port);
})