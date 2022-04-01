'use strict';

// Sqrt
console.log('---- Math.sqrt ----');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // square root
console.log(8 ** (1 / 3)); // cubic root

// Max
console.log('---- Math.max ----');
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); // Makes type coersion, still works
console.log(Math.max(5, 18, '23px', 11, 2)); // Cannot do parsing, returns NaN

// Min
console.log('---- Math.min ----');

// Calculating area with Math.PI (r = 10)
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random
console.log('---- Math.random ----');
console.log(Math.trunc(Math.random() * 6) + 1); // Dice (1-6)

// General method of generating random numbers in a specific interval
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log('---- Math.trunc ----');
console.log(Math.trunc(23.3)); // Simply removes any decimal part

console.log('---- Math.round ----');
console.log(Math.round(23.3)); // Rounds to the nearest integer
console.log(Math.round(23.9));

console.log('---- Math.ceil ----');
console.log(Math.ceil(23.3)); // Rounds up to the nearest integer
console.log(Math.ceil(23.9));

console.log('---- Math.floor ----');
console.log(Math.floor(23.3)); // Rounds down to the nearest integer
console.log(Math.floor(23.9));

// All the rounding methods do type coersion
console.log(Math.floor('23.3'));

// Rounding decimals
console.log('---- toFixed ----');
console.log((2.7).toFixed(0)); // Returns string
console.log((2.7).toFixed(3)); // Returns string
console.log((2.345).toFixed(2)); // Returns string

// Simple way to let it return integer (add a plus at the beginning of the expression)
console.log(+(2.345).toFixed(2)); // Returns string
