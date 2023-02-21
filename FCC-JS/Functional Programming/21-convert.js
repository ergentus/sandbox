// Only change code below this line
function urlSlug(title) {
   return title
      .trim()
      .toLowerCase()
      .split(/\W+/g)
      .join('-')
}
// Only change code above this line
urlSlug(" Winter Is Coming");