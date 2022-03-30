'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Functional way
// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // 0 is accumulator
console.log(balance);

// Functional way with arrow
const balanceArr = movements.reduce((acc, mov, i) => acc + mov, 0);
console.log(balanceArr);

// Traditional way
let balanceFor = 0;
for (const mov of movements) {
  balanceFor += mov;
}
console.log(balanceFor);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements.at(0)
);
console.log(max);

// Minumum value
const min = movements.reduce(
  (acc, mov) => (acc < mov ? acc : mov),
  movements.at(0)
);
console.log(min);
