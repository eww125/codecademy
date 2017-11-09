let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions[0]);

let hello = 'Hello World';
console.log(hello[6]);
// Output: W

let listItem = newYearsResolutions[0]
console.log(listItem);

console.log(newYearsResolutions[3]); //undefined

newYearsResolutions[1] = 'Learn a new language'
console.log(newYearsResolutions);

console.log(newYearsResolutions.length);

//push
newYearsResolutions.push('item 3', 'item 4');
console.log(newYearsResolutions);

//pop
newYearsResolutions.pop();
console.log(newYearsResolutions);

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//shift
groceryList.shift()
//console.log(groceryList);

//unshift
groceryList.unshift('popcorn')
//console.log(groceryList);

//slice
console.log(groceryList.slice(1,4));

//let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments.push('tapatio')
console.log(condiments)

condiments = ['Sriracha'];
console.log(condiments);

utensils.pop();
console.log(utensils)
utensils = ['Spork']; //error due to 'const'
