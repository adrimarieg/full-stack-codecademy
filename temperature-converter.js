// Today's forecast is 293 degrees kelvin
const kelvin = 293;
//Celsius is 273 degree below kelvin
const celsius = kelvin - 273;
// formula converts c to f
var fahrenheit = celsius * (9/5)+32;
//this formula reassigns fahrenheit as a whole number
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is '+fahrenheit+' degrees in Fahrenheit.');
