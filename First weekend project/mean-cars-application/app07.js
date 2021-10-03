const express = require("express");
const path = require("path");
require("./api/data/db");
const route = require("./api/route");
const app =express();

app.set("port",3000);
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use("/",express.static(path.join(__dirname,"public")));
app.use("/api",route);
const server = app.listen(app.get("port"),function(){
    console.log('server has started at ', server.address().port);
})