'use strict';

const rest = new Map();

// Adding item
rest.set('name', 'Classico Italiano');

// Data type would be anything
rest.set(1, 'Firenze, Italy');

// Set returns the latest version of the 'map' object (doesn't create a new one)
const rest2 = rest.set(2, 'Lisbon, Portugal');
console.log(rest);

// Since the set method returns the object itself, it can be used by chaining technique
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :/');

// Retrieving the items
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check if includes
console.log(rest.has('categories'));

// Removing items
rest.delete(2);

// Clear
rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/* Wouldn't have worked like that
rest.set([1,2], 'Test');
console.log(rest.get([1,2]));
Because keys are different arrays actually
*/
