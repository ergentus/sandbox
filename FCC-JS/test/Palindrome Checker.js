function palindrome(str) {

    const newStr = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();

    for (let i = 0; i < newStr.length / 2; i++) {
        if (!(newStr[i] === newStr[newStr.length - i - 1])) {
            return false
        }

    }
    return true
}

const string = "Race car"

console.log(palindrome(string));