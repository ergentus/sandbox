/*function diffArray(arr1, arr2) {
   return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
*/

function diffArray(arr1, arr2) {
   let newArr = [];
   function onlyInFirst(first, second) {
      first.map((el) => {
         if (second.indexOf(el) === -1) {
            newArr.push(el);
         }
      })
   }

   onlyInFirst(arr1, arr2);
   onlyInFirst(arr2, arr1);

   return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
