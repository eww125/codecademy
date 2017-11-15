let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(function(animal) {
  return animal[0];
});
console.log(secretMessage.join(''));

// refactored using arrow function syntax
animals.forEach((animal) => {
  let secretMessage = animals.map((animal) => {
    return animal[0];
  })
});
console.log(secretMessage.join(''));


let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
  let smallNumbers = bigNumbers.map(numbers => numbers / 100);
console.log(smallNumbers);
