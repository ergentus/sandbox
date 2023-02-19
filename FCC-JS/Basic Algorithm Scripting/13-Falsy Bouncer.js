function bouncer(arr) {
   return arr.filter((el) => Boolean(el))
}

bouncer([7, "ate", "", false, 9]);