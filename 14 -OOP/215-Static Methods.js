'use strict';

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Declaring static function in the class
  static hey2() {
    console.log('Hey there for the 2nd time !');
  }
}

const jack = new Person('Jack', 2017);

// Declaring static function
Person.hey = function () {
  console.log('Hey there !');
  console.log(this); // Logs the entire contructor function
};

Person.hey(); // Works
// jack.hey() -> Throws error

Person.hey2();
