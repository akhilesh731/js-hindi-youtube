let x = 123.5;
let y = 123456789n;
let s1 = "howdy";
let b1 = true;
let a = null;
let b;

console.log(x);
console.log(y);
console.log(a);
console.log(b);

console.log(typeof y);
console.log(typeof a); 
//The null type cannot be tested with 'typeof' like all the other primitive types
//This must be tested with the type equality operator (i.e., === null).
console.log(typeof b);

function help(){
    //no return statement
}
console.log(help());

function help1(){
    return null;
}
console.log(help1());

//symbol
let id = Symbol("123");
let id1 = Symbol("123");
console.log(id === id1);    //false
console.log(typeof id);

