const express = require('express');
const route = require('./routes');
const app = express();

app.set("port",3000)

app.use("/",route);


const server = app.listen(app.get("port"),function(){
    console.log("server has started at ",server.address().port);
})