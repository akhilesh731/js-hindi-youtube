let b1 = true;
let a = 0;
let b = 0;

if(b1 == true){
    a++;
    b++;
}else{
    a = 0;
    b = 0;
}
console.log("a = "+a, "b = "+b);

//The Ternary equivalent
b1 = true ? (a++, b++) : (a=0, b=0);
console.log("a = "+a, "b = "+b);

let c=0;
b1 = true ? (a++, b++, c++) : (a=0, b=0, c=0);
console.log("a = "+a, "b = "+b, "c = "+c);