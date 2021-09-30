const express = require('express');

module.exports.multiplication =function(req,res){
    console.log("get multiplication of numbers has started");
    const num1 = parseInt(req.params.number1);
    const num2 = parseInt(req.query.number);
    console.log("the multiplication of "+num1+" and "+num2 +" is ",num1*num2);
    res.status(200).send(''+"the multiplication of "+num1+ " and " +num2 +" is " +num1*num2)

}