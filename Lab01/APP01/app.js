console.log("1: start")
const fibonacci = require('./Fibonacci');
setTimeout(function(){
    console.log(fibonacci(60));
    console.log(fibonacci(-15));
},1000);


console.log("3: End");