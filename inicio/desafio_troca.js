let a = 7;
let b = 94;

console.log("a: " + a + " b: " + b);

let temp = a; //armazena temporariamente na memoria o valor a
a = b;
b = a;

console.log("a: " + a + " b: " + b);

