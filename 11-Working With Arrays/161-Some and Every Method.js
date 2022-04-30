'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // Has deposits

const everyDeposits = movements.every(mov => mov > 0);
console.log(everyDeposits); // Are they all deposit
