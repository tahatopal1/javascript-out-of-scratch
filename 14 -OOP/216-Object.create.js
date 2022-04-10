'use strict';

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  // Make it programmatic way
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

// Make it programmatic way (prefered)
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
