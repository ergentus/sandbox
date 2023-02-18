function confirmEnding(str, target) {
   if (target === str.slice(-target.length)) {
      return true
   }
   return false;
}

confirmEnding("Bastian", "n");