// Only change code below this line
class Thermostat {
   constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
   }

   get celsius() {
      return 5 / 9 * (this.fahrenheit - 32)
   }

   set celsius(changeTemp) {
      this.fahrenheit = changeTemp * 9.0 / 5 + 32;
   }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

console.log(thermos.fahrenheit);
console.log(thermos.celsius);
thermos.celsius = 30;
console.log(thermos.fahrenheit);
