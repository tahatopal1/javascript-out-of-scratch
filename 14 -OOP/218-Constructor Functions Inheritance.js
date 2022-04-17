'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //this.firstName = firstName;
  //this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Inheritance is ensured (Linking prototypes)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// All true
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor); // Person
Student.prototype.constructor = Student; // Constructor fixed
console.dir(Student.prototype.constructor); // Student
