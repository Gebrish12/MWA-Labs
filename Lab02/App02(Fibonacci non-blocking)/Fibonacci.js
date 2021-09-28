const fibonacci = function (num) {
  var number =num;
 if(num<0){
    number = num*-1;
 }
   fib =[];
  fib[0]=0;
  fib[1]=1;
  for (var i=2;i<=number;i++){
    fib[i]=fib[i-2]+fib[i-1];
  }
 return fib[number];

}

console.log(fibonacci(30));
console.log(fibonacci(-15));