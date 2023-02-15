let count = 0;

function cc(card) {
  // Only change code below this line
if (card > 1 && card <= 6) {
  count++;
} else if (card >= 7 && card <= 9) {
  count;
} else {
  count--;
}

if (count > 0) {
  return console.log(count + " Bet");
}
return count + " Hold"
  // Only change code above this line
}

cc(2); cc(3); cc(4); cc(5); cc(6);