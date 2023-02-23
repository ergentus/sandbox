function whatIsInAName(collection, source) {
   const sourceKey = Object.keys(source)

   return collection.filter((obj) => {
      for (let i = 0; i < sourceKey.length; i++) {
         if (!obj.hasOwnProperty(sourceKey[i]) || obj[sourceKey[i]] !== source[sourceKey[i]]) {
            return false;
         }
      }
      return true;
   })
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })