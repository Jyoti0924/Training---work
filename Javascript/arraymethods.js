let arr = [1,2,4,5]; // it will pop the last value
console.log(arr.pop());

let a = new Array ("h","p");// it will show the first value
console.log(a[0]);

let b = []
b[0]="M";
console.log(b)// it will put M at index 0

let c = ["h","p","q","R","s","t"]
console.log(c.length)// it will show the length of the array

let d = ["j", "o","t","t"];
console.log(d.toString());// it will convert array into string

let e = ["j", "o","t","t"];
console.log(e.join("😎")); // it will join the things whatever we write inside quotes

let f= ["kiwi", "mango","apple","banana"];
console.log(f.push("stawberry"));
console.log(f);// it will push the value inside the array

let g = ["1","2","3"]
console.log(g.shift());//it is used to remove element from start

let h = ["1","2","3"]
h.unshift('0');//it will add element in start of array
console.log(h);

let i =  ["1","2","3"]
console.log(i[i.length]="4")// it will direct element in last without any method


let j =  ["1","2","3"]
delete j[j.length-1]//delete is a keyword here
console.log(j)//to remove element from last without any method

let k = ["j","o","t","t"];
let l = ["D","h","i","m","a","n"];
console.log(k.concat(l));//it will concat the elements

let m =[2,[4,[5,[7,8]]]]// flat method will remove the inner braces of nested array
console.log(m.flat(3));//here 3 define the nested array length we want to remove

let n = [[],[],[]];
console.log(n.flat())// here we will not give any value in n because they are not nested they have comma

let o = [3,4,6,7,8];
o.splice(2,0,5,7);//here 2 is position where we will insert 5 & 7 by removing 0 element from here
console.log(o);

let p = [1,2,3,4,5,7,8,9,21];
p.splice(1,5);// here 1 is position and it will delete 5 elements from 1st position in array
console.log(p);

let q= [1,2,3,4,5];
q.splice(2);
console.log(q);// it will remove elements after position 2 & it work on length

let r = [2,5,1,7,3,4,22];
r.sort();//it will sort the array but with accordance to alphabetically ascending order
console.log(r);

// let s = [2,5,1,7,3,4,22];
// let t=[3,5,8,9,10,45,24];
// s.sort(function(s,t){
//     return s-t;
// })// for making above sort order perfect



