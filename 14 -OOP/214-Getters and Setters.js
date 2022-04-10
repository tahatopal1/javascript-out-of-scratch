'use strict';

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  // No commas between classes
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' '))
      this._fullName = name; // Actually creating a new variable
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log("Jessica's age: " + jessica.age);

const walter = new PersonCl('Walter', 1965); // Error

const jesse = new PersonCl('Jesse Pinkman', 1982);
console.log(jesse);

jesse.fullName = 'Jessey Pinkman';
console.log();
