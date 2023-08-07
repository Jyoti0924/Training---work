//METHODS OF STRINGS

// let x = 'Hello';
// let y = 'Jott';
// console.log(x.length);

// let a = "Hello Jott Bye";
// console.log(a.slice(5));// ye 5 index tak sab delete krdega
// let b = "Hy Jott Jyoti ";
// console.log(b.slice(2,8));

// let a = "Hello Jyoti ";
// let b = "hello jott Hello";
// console.log(a.replace("Jyoti","Jott"));
// console.log(b.replace(/hello/gi,"hey"));

// let a = " hello hy hello are you";
// console.log(a.replaceAll("hello", "hahha"));

// let a = "jyoti";
// console.log(a.toUpperCase());
// let b = "JOTT";
// console.log(b.toLowerCase());

// let a = 'Mayank';
// console.log(a.substring(0,1));
// let b = " jott";
// console.log(b.substring(1,5))
// let join= console.log(a.concat(b)); // join two strings

// let a = "    Jott   "; // remove space from start and end
// console.log(a.trim());
// console.log(a.trimStart());// trim space from start
// console.log(a.trimEnd());// trim space from end

// let a = "5";
// console.log(a.padStart(4,"0")); // it will put 0 in front of no. of values given to us 
// let b = "09";
// console.log(b.padEnd(5,2))

// let a = 24; //number
// let b =a.toString();//it will convert number into string 
// console.log(typeof(a),typeof(b));

// let a = "Jott Dhiman"; // to find first chracter of both two after making them array
// let b = a.split(" ");
// let c = b[0].charAt(0);
// let k = b[1].charAt(0);
// console.log(c.concat(k));// it will join both of them

// let a = "Hello"; // for finding h without any method
// console.log(a[0]);// from starting
// console.log(a[a.length-1]);// from last 

// let a = "hello hy hifi bye hello hifi hello";
// let b = a.indexOf("hifi");
// let e = a.indexOf("hifi",13);
// console.log(b,e);
// let c = a.lastIndexOf("hello");
// console.log(c);

// let a = "hello hy hifi bye";
// console.log(a.search("bye"));// it will search the word and give the index of it

// let a="hello world";
// let b = a.split(" ")
// // console.log(b)
// let c = b[0].charAt(0).toUpperCase();
// let d = b[1].charAt(0).toUpperCase();
// // console.log(b.join("?")) // join will join both together
// console.log(c.concat(d))

// let a = "hello hy hifi bye hello";
// console.log(a.match("hello")); // it will tell how many times hello exist 

// let a = "hello hy hifi bye hello";
// console.log(a.includes("hy"));// it will ans in true or false n check whether it present or not
// console.log(a.includes("bie"));

// let a = "hello hy hifi bye hello";//it will also answer in true or false
// console.log(a.startsWith("hello"));
// console.log(a.endsWith("by"));

// let a = "sdfghj";
// let b = `Jott ${a}`; //here jott is static and jyoti i.e. name is changing dynamically 
// console.log(b);//it will dynamically catch the values

let a = "cat bat cat cat";
let pattern = /cat/gi;
let match = a.matchAll(pattern);
console.log(match);
for(let i of match){
    console.log(i[0]);
}