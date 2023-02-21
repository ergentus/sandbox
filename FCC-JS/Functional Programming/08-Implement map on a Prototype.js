Array.prototype.myMap = function (callback) {
   let newArray = [];
   // Only change code below this line
   this.forEach((el, i, arr) => newArray.push(callback(el, i, arr)))
   
   return newArray;
   /*for (let i = 0; i < this.length; i++) {
      newArray[i] = callback(this[i], i, this)               //newArray.push(callback(this[i], i, this));
   }*/
   // Only change code above this line
};


[23, 65, 98, 5, 13].myMap((item) => item)