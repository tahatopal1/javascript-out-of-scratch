'use strict';

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
// Closure changes ('a' is replaced with 'b')
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // Closure in here: callback function runs completely independent
  // Yet, it can access the environment variable (n and perGroup)
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passsengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

// It won't log 1000 passengers since closure has higher precedence
const perGroup = 1000;
boardPassengers(180, 3);
