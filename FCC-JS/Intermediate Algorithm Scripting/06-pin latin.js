function translatePigLatin(str) {
   let regex = /^[^aouei]+/
   let matchStr = str.match(regex)
   return matchStr !== null
      ? str.replace(regex, '').concat(matchStr).concat('ay')
      : str.concat('way')

}

translatePigLatin("glove");