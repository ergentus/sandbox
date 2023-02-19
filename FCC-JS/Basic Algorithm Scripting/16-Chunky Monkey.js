function chunkArrayInGroups(arr, size) {
   const bigArr = []
   for (let i = 0; i < arr.length; i += size) {
      bigArr.push(arr.slice(i, i + size))
   }

   return bigArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);