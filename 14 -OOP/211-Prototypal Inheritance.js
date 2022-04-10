'use strict';

const Person = function (firstName, birthYear) {
  // Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

// Array prototypal
const arr = [3, 6, 6, 4, 2, 4, 1, 1, 9, 1, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // Object.prototype

// From now on, all the array objects will be able to access this function
// Prototype is extended (Generally is not a good idea)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
