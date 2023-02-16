function rangeOfNumbers(startNum, endNum) {
   if (startNum > endNum) {
      return [];
   } else {
      const arr = rangeOfNumbers(startNum, endNum - 1)  
      console.log(arr);  
      arr.push(endNum)
      console.log(arr);
      return arr;
   }
};

rangeOfNumbers(1, 4)