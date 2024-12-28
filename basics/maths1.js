// console.log(Math.random());   
// console.log(Math.floor(Math.random()*2));   // 0,1 <= num < 2
// console.log(Math.floor(Math.random()*3));   // 0,1,2 <= num < 3

// console.log(Math.floor(5.95));  //5
// console.log(Math.floor(5.05));  //5
// console.log(Math.floor(-5.05)); //-6

// console.log(Math.ceil(0.95));   //1
// console.log(Math.ceil(7.004));  //8
// console.log(Math.ceil(-7.004)); //-7

function getRandomInt(num){
    return Math.floor(Math.random() * num);
}
//console.log(getRandomInt(4));

const range1 = Math.floor((Math.random()*10)+1); //1-10
const range2 = Math.floor((Math.random()*20)+1); //1-20
//console.log(range1+' '+range2);

//customised range
const min = 10;
const max = 20;
let range = Math.floor((Math.random() * ((max-min)+1)) + min);
//console.log(`random number between ${min}-${max} is `+range);

//how to find random number range? e.g 1-5(both inclusive)
console.log(Math.floor((Math.random()*5)+1));