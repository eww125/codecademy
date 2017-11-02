let runnersAge = 17
console.log(`runnersAge= ${runnersAge}`)

let registeredEarly = Math.round(Math.random()) // 1 = early, 0 = same day
console.log(`registeredEarly = ${registeredEarly}`)

let raceNumber = Math.floor(Math.random()*1000);
if (registeredEarly == 0) {
  raceNumber+=1000
}
console.log(`raceNumber = ${raceNumber}`)

if ((runnersAge > 18) && (registeredEarly == 1)) {
  console.log('Race at 9:30am')
}
