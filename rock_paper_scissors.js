//userChoice = 'scissors'
//console.log(`userChoice = ${userChoice}`)

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
} else {
  console.log('Invalid input'); }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber===0) {
    return 'rock'
} else if (randomNumber===1) {
    return 'paper'
} else {
    return 'scissors'
  }
}

function determineWinner(userChoice, computerChoice) {
  console.log('determineWinner')
  console.log(userChoice, computerChoice)
  if (userChoice === 'bomb') {
    return 'User wins!'
  }
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
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'The user won'
    }
    else {
      return 'The computer won'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'The user won'
    }
    else {
      return 'The computer won'
    }
  }
}

//console.log(determineWinner(userChoice, computerChoice))

function playGame() {
  console.log('playGame')
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice()
  console.log(userChoice, computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
