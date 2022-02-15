'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 fours
    close: 24,
  },
};

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

//console.log(`We are open on ${properties.length}`);
let openStr = `We are open on ${properties.length} days: `;

/*for (const day of properties) {
  console.log(day);
}*/

for (const day of properties) {
  openStr += `${day} `;
}

console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

/*for (const entry of entries) {
  console.log(entry);
}*/

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we are opened between ${open} and ${close}`);
}
