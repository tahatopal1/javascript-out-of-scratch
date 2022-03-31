'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// ✅ It takes a callback function that returns a Boolean value like 'filter'
// ✅ Unlike filter, it returns only one value (not an array)

// Returns first element that matches the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(Math.abs(firstWithdrawal));

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// findIndex: Finds the index of element that matches the condition
// Example: Delete the account of 'Steven'
const index_steven = accounts.findIndex(
  acc => acc.owner === 'Steven Thomas Williams'
);
console.log('Before removing', ...accounts);
accounts.splice(index_steven, 1);
console.log('After removing', ...accounts);
