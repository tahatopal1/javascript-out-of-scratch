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

// Creating person
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Creating student
const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce();
jay.calcAge();
