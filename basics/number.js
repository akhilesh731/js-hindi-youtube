const score = 400;
console.log(score);

let balance = new Number(100);
balance = new Number(200);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));    //200.00

const num1 = 123.8976;
console.log(num1.toPrecision(5));   //123.90
console.log(num1.toPrecision(3));   //124
console.log(num1.toPrecision());

const num2 = 1000000;
console.log(num2.toLocaleString());