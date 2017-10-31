// set a constant variable kelvin
//const kelvin = 294
const kelvin = prompt('What is the Kelvin temperature today?');
console.log(`kelvin= ${kelvin}`)

// set celsius = kelvin -273
const celsius= kelvin - 273
console.log(`celsius= ${celsius}`)

// calculate fahrenheit
fahrenheit = Math.floor(celsius * (9/5) + 32)
console.log(`fahrenheit= ${fahrenheit}`)

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
