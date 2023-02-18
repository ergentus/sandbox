let hello = "   Hello, World!  ";
let wsRegex = hello.replace(/^\s+|\s+$/g, ''); // Change this line
let result = wsRegex; // Change this line
console.log(result)