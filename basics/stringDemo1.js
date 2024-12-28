const s1 = "Happy New Year";
const string1 = "hello";
const string2 = "world";

//Find the first character in a string
//console.log(s1.charAt(0));
//Find the last character in a string
//console.log(s1.charAt(s1.length-1));

// console.log('Hey dear! '.concat('how are you?'));
// console.log(s1.concat(' 2025'));
// console.log(s1.concat(" "+string1+" "+string2));

//console.log(s1.includes('New',0));

//Find the index of string
const s2 = "hey hello hello hey dear";
//console.log(s2.indexOf('hello'));       //4
//Find the first occurrence of a string
const s3 = "I am learning JS by self";
//console.log(s3.indexOf('learning'));    //5
//Use second parameter to start search
//console.log(s2.indexOf('hello',6));     //11
//Return -1 if not found
const cars = ['tata','honda','hundai','bmw'];
//console.log(cars.indexOf('bmw'));       //3
//console.log(cars.includes('honda'));    //true

//Returns the last occurrence of a substring in the string.
//console.log(s2.lastIndexOf('hello'));   //10

const s4 = "HeY DeaR";
//console.log(s4.toLowerCase());    //hey dear
//console.log(s4.toUpperCase());    //HEY DEAR

//replace
const play = "all cats and dogs are playing";
//console.log(play.replace('cats','rats'));
//replace multiple values
const fruitString = "apples are round and apples are healthy";
//console.log(fruitString.replace(/apples/g,'oranges'));

string = "AbCD_AbCD";
modifiedString = string.replaceAll(/b/g,"B");
//console.log(modifiedString);

let str = 'iitkanpurup';
console.log(str.slice(3,9));
console.log(`my home town is ${str.slice(3,9)}`);
