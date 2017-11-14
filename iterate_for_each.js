let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

// function(parameter) syntax
fruits.forEach(function(fruitItem) {
  console.log('I want to eat a ' + fruitItem);
});

// refactored using arrow function syntax
fruits.forEach((fruitItem) => {
  console.log('I want to eat a ' + fruitItem);
});
