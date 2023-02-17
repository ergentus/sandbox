function removeFirstTwo(list) {
   // Only change code below this line
   let [a, b, ...shorterList] = list; // Change this line
   console.log(shorterList);
   // Only change code above this line
   return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);