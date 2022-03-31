'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // Mutates the original array
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort()); // Works wrong

// Correction with callback function
// return < 0: A,B (keep order)
// return > 0: B,A (switch order)
// Ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// Ascending order
movements.sort((a, b) => {
  return a - b;
});
console.log(movements);

// Descending order
movements.sort((a, b) => b - a);
console.log(movements);
