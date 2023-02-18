function largestOfFour(arr) {
   const arrStr = arr.map((el) => el.sort((a, b) => b - a)).map((el) => el[0])
   return arrStr
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// arr.map((el) => el.reduce((acc, el) => acc > el ? acc : el))