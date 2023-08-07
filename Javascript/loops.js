//DO-WHILE LOOP
// let i = 1 ;
// do {
//     console.log(i);
//     i++;
// }
// while(i<=10)

// Q-2 WHILE LOOP
// let i =1;
// while(i<=10)
// {
//     let result = 2 * i;
//     console.log(`${2} *${i} = ${result}`);
//     i++;
// }

//Q-3 for loop
// let n = 0;
// let m = 1;
// let next ;
// let num=4;
// console.log("FIBONACCII SERIES");
// for(let i=0; i<=num; i++)
// {
//     console.log(n);
//     next = n+m ;
//     n=m;
//     m=next;
// }

//q-4 for-each loop
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// console.log(sum);

// function myFunction(item) {
//   sum += item;
// }

//q-5 for-in loop
// const person = {fname:"Jott", lname:"Dhiman", age:20};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }
// console.log(text)

//q-6 for of loop
const smile = ["hahah", "hehhehe", "hihihi"];

let text = "";
for (let x of smile) {
  text += x ;
}
console.log(text)