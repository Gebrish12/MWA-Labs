require("./api/data/dbConnection").open();
const express = require('express');
const path = require('path');
const router = require('./api/routes');
const app = express();
app.set("port",3000);

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use("/html",express.static(path.join(__dirname,"public")));
app.use("/api",router);

const server = app.listen(app.get("port"),function(){
    console.log("server has started at ", server.address().port);
})
