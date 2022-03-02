'use strict';

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);

// Strings are also iterables
console.log(new Set('Robust'));

// Set could also be empty
console.log(new Set());

// Size
console.log(ordersSet.size);

// Check if includes
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Adding new items
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Removing items
ordersSet.delete('Risotto');
console.log(ordersSet);

// This doesn't work since there is o index in Set
console.log(ordersSet[0]); // Will print undefined

// Looping
for (const order of ordersSet) {
  console.log(order);
}

// Clear
ordersSet.clear();
console.log(ordersSet);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// Convertion set to array
const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

// To obtain the size of unique values, we don't even need to create a new object
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter']).size);

// How many unique letters in the name?
console.log(new Set('arnoldschwarzenegger').size);
