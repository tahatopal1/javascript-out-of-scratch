'use strict';
const menu = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

console.log(...menu.entries());

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}
