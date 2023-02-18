function findLongestWordLength(str) {
   const arr = str.split(' ').map((el) => el.length).sort((a, b) => b - a)
   return arr[0]
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

/* function findLongestWordLength(str) {
   return Math.max(...str.split(" ").map(word => word.length));
}
*/