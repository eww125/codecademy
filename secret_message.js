let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
secretMessage.pop();
secretMessage.push("to");
secretMessage.push("program");
secretMessage[6] = secretMessage[6].replace('easily', 'right');
delete secretMessage[0];
secretMessage[0] = 'Programming'
secretMessage.splice(5,5,'know')
console.log(secretMessage.join(' '))
