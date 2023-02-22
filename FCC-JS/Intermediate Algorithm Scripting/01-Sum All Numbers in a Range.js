function sumAll(arr) {
   const sortArr = arr.sort((a, b) => a - b)

   return (sortArr[0] + sortArr[1]) * ((sortArr[1] - sortArr[0] + 1) / 2)

}

sumAll([3, 10]);