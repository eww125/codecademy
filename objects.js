let person = {
  name: 'Evan Wappel',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  friend: 'Pewt',
  //sayHello: () => {
  //  return 'Hello, there!'
  //},
  sayGoodbye() {
    return 'Goodbye!'
  },
  sayHello() {
    return 'Hello, my name is ' + this.name
  }
};

let friend = {
  name: 'Pewt'
}
friend.sayHello = person.sayHello;

console.log(person.name);
console.log(person.age);

// bracket notation
console.log(person['name']);
console.log(person['age']);

let day = 'Wednesday'
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm'
}
else {
  alarm = 'weekAlarm'
}

console.log(person[alarm])

// adding a property
person.hobbies = ['Guitar', 'Mountain Biking'];
console.log(person.hobbies)

// editing a property
person.hobbies = ['Guitar'];
console.log(person.hobbies)

// method, key-function pair
console.log(person.sayHello())

// ES6 method
console.log(person.sayGoodbye())

// this keyword
console.log(friend.sayHello())
