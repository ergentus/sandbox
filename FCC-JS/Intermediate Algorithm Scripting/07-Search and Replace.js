function myReplace(str, before, after) {

   let index = str.indexOf(before)

   if (str[index] === str[index].toUpperCase()) {                       //  if (/^[A-Z]/.test(before))
      after = after.charAt(0).toUpperCase() + after.slice(1);
   } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
   }

   return str.replace(before, after)

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");