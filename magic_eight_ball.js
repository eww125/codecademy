let userName = 'Evan';
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!')

let userQuestion = "What will Pewter Puppy do tonight?"
console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 7)
console.log(`Random Number = ${randomNumber}`)

let eightBall = 'init'

if (randomNumber === 0) {
  	eightBall = "Chew ball";}
	else if (randomNumber === 1) {
    eightBall = 'Eat banana';}
	else if (randomNumber === 2) {
    eightBall = 'Pee poop';}
	else if (randomNumber === 3) {
    eightBall = 'Butt shnuggles';}
	else if (randomNumber === 4) {
    eightBall = 'Hang with her buddies';}
	else if (randomNumber === 5) {
    eightBall = 'Get some treats';}
	else if (randomNumber === 6) {
    eightBall = 'Shenanigans';}
	else{}
  
console.log(eightBall);
