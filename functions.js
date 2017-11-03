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
