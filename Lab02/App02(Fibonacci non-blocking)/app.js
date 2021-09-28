const child_process = require("child_process");
console.log("1: start")

const new_process = child_process.spawn("node",['./Fibonacci.js'],{stdio:"inherit"})

console.log("3: End");