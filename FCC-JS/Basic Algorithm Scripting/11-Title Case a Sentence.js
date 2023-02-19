function titleCase(str) {
   str = str.split(' ').map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ')
   console.log(str)
   return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");