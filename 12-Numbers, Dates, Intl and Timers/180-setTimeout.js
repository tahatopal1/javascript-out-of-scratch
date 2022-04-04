'use strict';

setTimeout(() => console.log('Here is your 🍕'), 3000);

setTimeout(
  (ing1, ing2) => console.log(`Here is your 🍕 with ${ing1} and ${ing2}`),
  3000,
  'spinach',
  'olives'
);

const ingredients = ['olives', 'spinach'];
setTimeout(
  (ing1, ing2) => console.log(`Here is your 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

ingredients.includes('spinach') && clearTimeout(pizzaTimer);

console.log('Waiting....');
