userChoice = 'rock'
console.log(`userChoice = ${userChoice}`)

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
} else {
  console.log('Invalid input'); }
}

function getComputerChoice() {
  // generate and print random number
  let randomNumber = Math.floor(Math.random() * 3)
  console.log(`randomNumber = ${randomNumber}`)
  // convert 0/1/2 into rock/paper/scissors
  if (randomNumber===0) {
    return 'rock'
} else if (randomNumber===1) {
    return 'paper'
} else {
    return 'scissors'
  }
}

computerChoice = getComputerChoice()

function determineWinner(userChoice, computerChoice) {
  console.log(userChoice, computerChoice)
  if (userChoice === computerChoice) {
    return 'The game was a tie'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'The user won'
    }
    else {
      return 'The computer won'
    }
    }
  }

  //if (UserChoice = 'rock') {
  //  if (computerChoice = 'scissors') {
    //  return console.log('rock crushes scissors')
    //}
  //}
}

determineWinner(userChoice, computerChoice)
