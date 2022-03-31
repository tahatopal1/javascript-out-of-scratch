'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Method chaining
const eurToUsd = 1.1;
const calculateTotalDeposit = function (movements, currency) {
  const result = movements
    .filter(mov => mov > 0)
    .map(mov => mov * currency)
    .reduce((acc, mov) => acc + mov);
  console.log(result);
};

calculateTotalDeposit(movements, eurToUsd);
