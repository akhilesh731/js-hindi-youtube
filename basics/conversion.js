// convert to number
let s1 = "33";
let value = Number(s1);
// console.log(typeof value);
// console.log(value);
// "" => 0
// "33" => 33
// "33abc" => NaN
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(typeof Number("22" - 0));
console.log(Number("22" * 1));

// convert to boolean
let x = 0;
let value1 = Boolean(x);
// console.log(typeof value1);
// console.log(value1);
// "" => false
// 1 => true
// null => false
// undefined => false

//string type coersion
//To convert a value into a primitive string value explicitly, the String() function is used.
let a = 54;
// console.log(String(a));
// console.log(String(true));  //true
// console.log(String(null));  //null  
// console.log(String(undefined)); //undefined
