let a = 24.4;
console.log(Math.round(a)); // it will provide the round off value

let b = 45.2;
console.log(Math.ceil(b));// it will provide the up values only

let c = 47.9;
console.log(Math.floor(c)); // it will provide values in down only 

let d = 4;
console.log(Math.pow(4,4)); // it will provide power of the given value 

let e = 64
console.log(Math.sqrt(e));//it will give us squareroot of 64

let f = [2,8,9,1,0]; // by making array we need to use this below method
console.log(Math.min.apply(null,f));

console.log(Math.min(2,7,9,3));// it will give min value without making array
console.log(Math.max(2,7,9,3));// it will give max value without making array

console.log(Math.random());// it will give random values whenever we trigger it
console.log(Math.random()*10);//it will give random values from 0-9
console.log(Math.random()*11);//it will give random values from 0-10 similarly so on
console.log(Math.random()*10)+1;// it will not include 0 and give values from 1-10