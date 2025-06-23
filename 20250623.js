//ex1
let a = "some string";
let b = "other string";

a += b;
b = a.substring(0, a.length - b.length)
a =  a.substring(b.length)

console.log(a)
console.log(b)
