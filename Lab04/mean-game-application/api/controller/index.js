const express = require('express');
const dbConnection = require('../data/dbConnection');


const getAll = function(req,res){
    console.log("getALL request recieved");
    const db =dbConnection.get();
    const gameCollection = db.collection("games");
    var offset = 0;
    var counter = 6;

    if(req.query && req.query.offset){
        offset =parseInt(req.query.offset);
    }
    if(req.query && req.query.counter){
        var x =parseInt(req.query.counter);
        if(x>9){
            res.status(404).send("the count should not exceded morethan 9");
            return;
        }else{
            counter =x;
        }
    }

    gameCollection.find().skip(offset).limit(counter).toArray(function(err,games){
        if(err){
            res.status(500).send(err);
            return
        }else{
            res.status(200).json(games)
        }
    })
}

//// additional self practice
const getById = function(req,res){
    console.log('get by id request recieved');
    console.log(data[req.params.gameId]);
    res.status(200).json(data[req.params.gameId]);
}
 
const addGame = function(req,res){
    console.log('add new game request recieved');
    const data1 = req.body;
    console.log(data1);
    res.json(data1);
}

module.exports={
    getAll:getAll,
    addGame:addGame,
    getById:getById
}