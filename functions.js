function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
   	return false; 
  }
}

console.log(isGreaterThan(30,20))


// refactored using arrow function syntax:
const isGreaterThan = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return true;
  } else {
   	return false; 
  }
}

console.log(isGreaterThan(30,20))


// arrow functions
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;
console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
