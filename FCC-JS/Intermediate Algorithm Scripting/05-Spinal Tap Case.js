function spinalCase(str) {
   let regex = /[^a-z]/gi
   str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
   return str.replace(regex, '-').toLowerCase()
}

spinalCase("AllThe-small Things");