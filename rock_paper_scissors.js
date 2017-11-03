userChoice = 'rock'
console.log(`user_choice = ${userChoice}`)

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
} else {
  console.log('Invalid input');
}
}



const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3)
  console.log(`random number = ${randomNumber}`)
  if (randomNumber === 0) {
    return console.log('computer choice: rock')
  }
	console.log(`Computer Choice = ${randomNumber}`)
}

getComputerChoice()


/*
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice = computerChoice) {
    return console.log('tie game');
  }
  
  if (UserChoice = 'rock') {
    if (computerChoice = 'scissors') {
      return console.log('rock crushes scissors')
    }
  }
}

determineWinner(userChoice, computerChoice)
*/
