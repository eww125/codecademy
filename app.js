// data types
console.log('JavaScript')
console.log(33.7)
console.log(true)
console.log(null)

// math operators
console.log(45 + 3.5)
console.log(2017-1969)
console.log(65/240)
console.log(0.2708*100)

//properties
console.log('Teaching the world how to code'.length);

// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 

// string.proto methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

//libraries
console.log(Math.random()); // random number between 0 and 1

// Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8))

// Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.log(Number.isInteger(2017))

//Comments
// Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

// Variables
// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

// Can't over-write const variable
const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);

entree = 'Tacos';

// Can over-write let variable
let changeMe = true;
changeMe = false;
console.log(changeMe);

// Undefined
let notDefined;
console.log(notDefined);

let valueless
console.log(valueless);
