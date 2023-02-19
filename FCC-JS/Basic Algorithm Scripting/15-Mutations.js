function mutation(arr) {
   const arr1 = arr[0].toLowerCase()
   const arr2 = arr[1].toLowerCase()

   for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) < 0) return false
   }
   return true
}

mutation(["Mary", "Army"]);