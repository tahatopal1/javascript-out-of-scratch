'use strict';

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // Empty array
console.log(x);
console.log(x.map(() => 5)); // Empty again

// Fill method
// Empty array cannot be used with any method except for 'fill()' method
x.fill(1); // Mutates the array
console.log(x);

// It can be used just like 'slice' method
const y = new Array(10);
y.fill(3, 2, 6); // fill with '3' between 2 and 6. indices
console.log(y);

// fill method can be used on non-empty arrays
const z = [1, 2, 3, 4, 5, 6];
// fill the array with 10
z.fill(10);
console.log(z);

// Array.from
// Essentially an option for fill function with effective filling by using callbacks
const t = Array.from({ length: 7 }, () => 1);
console.log(t);

const a = Array.from({ length: 7 }, (cur, i) => i + 1); // 1 to 7
console.log(a);

// Using for DOM Elements
// This section is imaginary, will not work
const labelBalance = ''; // Imagine this is a button
// Getting all moves that has 'movements__value' class and fetching their text content as Number
labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
});

// Getting array of DOM elements (nodeList) without using spread opt.
const movementUI2 = [...document.querySelectorAll('.movements__value')];

// ✅ Array.from is a more modern option since it accepts a callback function to perform some mapping operations
