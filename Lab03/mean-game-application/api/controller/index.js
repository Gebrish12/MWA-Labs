const express = require('express');
const data = require('../data/games.json');

const getAll = function(req,res){
    console.log("getALL request recieved");
    res.status(200).json(data);
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