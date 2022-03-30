'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// Does not mutate string
console.log('---- SLICE ----');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Array copy
console.log([...arr]); // Array copy

// SPLICE
// Mutates string
console.log('---- SPLICE ----');
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
// Mutates string
console.log('---- REVERSE ----');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // Mutated, prints the save

// CONCAT
// Does not mutate string
console.log('---- CONCAT ----');
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
// Does not mutate string
console.log('---- JOIN ----');
console.log(letters.join(' - '));
