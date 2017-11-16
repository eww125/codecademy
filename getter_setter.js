let person = {
  _name: 'Lu Xun',
  _age: 137,
	set age(new_Age) {
		if (typeof newAge === 'number') {
      this._age = newAge;
      console.log('Valid input');
    } else {
      console.log('Invalid input')
    }
	}
}
