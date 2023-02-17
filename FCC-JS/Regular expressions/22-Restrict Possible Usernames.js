let username = "Jack";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line /^[a-z]([a-z]+\d*|\d{2,})$/i; 
let result = username.match(userCheck);
console.log(result)