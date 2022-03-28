'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hi!')('Jonas');

const greetWithArrow = function (greeting) {
  return ind => console.log(`${greeting} ${ind}`);
};

greetWithArrow('Hello!')('Michael');

const greetWithDoubleArrow = greeting => ind =>
  console.log(`${greeting} ${ind}`);

greetWithDoubleArrow("What's up?")('John');
