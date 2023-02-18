let sampleWord = "banannn12";
let pwRegex = /(?=\w{6,})(?=\w*\d\d)/; // Change this line
let result = sampleWord.match(pwRegex);
console.log(result)