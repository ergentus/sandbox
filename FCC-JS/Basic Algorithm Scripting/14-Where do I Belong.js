function getIndexToIns(arr, num) {
   return arr.filter(el => num > el).length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

/* 
function getIndexToIns(arr, num) {
   let count = 0

   arr.map((el) => (num > el) ? count++ : count)

   return count;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
*/