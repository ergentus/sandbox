function destroyer(arr) {
   const newArray = []
   for (let i = 1; i < arguments.length; i++) {
      newArray.push(arguments[i])
   }
   return arr.filter((el) => !newArray.includes(el))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);