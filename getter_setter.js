let person = {
  _name: 'Lu Xun',
  _age: 137,
	set age(newAge) {
		if (typeof newAge === 'number') {
      this._age = newAge;
      console.log('Valid input');
    } else {
      return 'Invalid input'
    }
	},
  get age() {
      console.log(`${person._name} is ${this._newAge} years old.`);
      return this._newAge;
  }
}
//person.age = 'Thirty-nine'
person.age = 39
console.log(person.age)
