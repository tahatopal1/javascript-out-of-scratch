'use strict';

const arr = [23, 11, 64];

console.log(arr[0]); // Traditional way
console.log(arr.at(0)); // Same thing with method

// Getting last element
// Traditional way
console.log(arr[arr.length - 1]);
console.log(arr.splice(-1)[0]);

// More modern way
console.log(arr.at(-1));

// It also works for string
console.log('array'.at(0));
console.log('array'.at(-1));
