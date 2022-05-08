'use strict';

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

  // No commas between methods
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Always needs to happen first!
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Override
  calcAge() {
    console.log(
      `I'm ${2022 - this.birthYear}, i study a lot since i'm a student`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2000, 'Computer Science');
console.log(martha);
martha.calcAge();
martha.introduce();
