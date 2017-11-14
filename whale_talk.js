var input = 'Hello how are you today'
vowels = ['a', 'e', 'i', 'o', 'u']
resultArray = []
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  console.log(input[inputIndex])
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    console.log(vowelsIndex)
    if (input[inputIndex] === vowels[vowelsIndex]) {
      console.log('test')
      resultArray.push(input[inputIndex])

    }

  }
  if (input[inputIndex] === "e") {
    console.log('double the e')
    resultArray.push("e")
  }
  if (input[inputIndex] === "u") {
    console.log('double the u')
    resultArray.push("u")
  }

}
console.log(resultArray.join('').toUpperCase());
