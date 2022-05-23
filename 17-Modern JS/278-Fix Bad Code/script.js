'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Making the object immutable by using freeze method
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

//spendingLimits.jay = 200; // Error
console.log(spendingLimits); // Logs the same

// const getLimit = user => spendingLimits?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function :)
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const nUser = user.toLowerCase(); // Avoiding parameter mutation

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // const limit = spendingLimits?.[user] ?? 0; // Move clever :)

  // const limit = getLimit(user); // DRY avoided

  // if (value <= getLimit(nUser)) {
  //   return [...state, { value: -value, description, nUser }];
  //   // budget.push({ value: -value, description, nUser });
  // }

  return value <= getLimit(limits, nUser)
    ? [...state, { value: -value, description, nUser }]
    : state;
};
const nBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log('nBudget1', nBudget1);
const nBudget2 = addExpense(
  nBudget1,
  spendingLimits,
  100,
  'movies 🍿',
  'Matilda'
);
console.log('nBudget2', nBudget2);

const nBudget3 = addExpense(nBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log('nBudget3', nBudget3);

// const checkExpenses = function (state, limits) {
//   // for (const entry of nBudget3) {
//   //   // const limit = getLimit(entry.user); // DRY avoided

//   //   if (entry.value < -getLimit(limits, entry.user)) {
//   //     entry.flag = 'limit';
//   //   }
//   // }
//   return state.map(entry => {
//     entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   }); // Creates a brand new array
// };

// Going with arrow function
// It has become a pure function aswell :)
const checkExpenses = (state, limits) => {
  // Map creates a brand new array
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

const finalBudget = checkExpenses(nBudget3, spendingLimits);
console.log('finalBudget', finalBudget);

// Impure
const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of budget) {
  //   // if (entry.value <= -bigLimit) {
  //   //   output += `${entry.description.slice(-2)} `; // Emojis are 2 chars
  //   // }
  //   output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses); // Side effect
};

logBigExpenses(finalBudget, 100);
