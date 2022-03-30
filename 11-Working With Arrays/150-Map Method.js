'use strict';

const eurToUsd = 1.1;

// Functional programming
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd; // EUR TO USD
});

console.log(movements);
console.log(movementsUSD);

// Traditional way
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor); // Prints the same

// Functional way with arrow function
// Nice and clear, one line callback function
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDArrow); // Prints the same

// Including index
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
