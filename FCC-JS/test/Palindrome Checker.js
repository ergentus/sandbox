function palindrome(str) {
    let firstHalfWord = '';
    let lastHalfWord = '';
    const newStr = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();

    if (newStr.length % 2 === 1) {
        for (let i = 0; i < (Math.floor(newStr.length / 2)); i++) {
            firstHalfWord += newStr[i];
        }
        for (let i = newStr.length - 1; i > Math.floor(newStr.length / 2); i--) {
            lastHalfWord += newStr[i];
        }
    } else {
        for (let i = 0; i < newStr.length / 2; i++) {
            firstHalfWord += newStr[i];
        }
        for (let i = newStr.length - 1; i > newStr.length / 2 - 1; i--) {
            lastHalfWord += newStr[i];
        }
    }

    if (firstHalfWord === lastHalfWord) {
        return true
    }
    return false

}

const string ="race car"

console.log(palindrome(string));