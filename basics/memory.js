let name1 = "Steve";
let name2 = name1;
name2 = "Mark";

console.log(name1); //Steve
console.log(name2); //Mark

let user1 = {
    email : "abc@gmail.com",
    upi : "1234@paytm"
}
let user2 = user1;
user2.email = "xyz@yahoo.com";

console.log(user1.email);
console.log(user2.email);
