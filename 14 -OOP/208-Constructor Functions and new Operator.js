'use strict';

const Person = function (firstName, birthYear) {
  // Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods (Bad practise, should never to this)
  // 1000 instance of this object means 1000 copies of 'calcAge'
  // Causes performance issues
  // We're gonna use prototypal inheritance instead
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false
