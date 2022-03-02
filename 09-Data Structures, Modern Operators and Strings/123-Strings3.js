'use strict';

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('John Smith'.split(' '));

const [firstName, lastName] = 'John Smith'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('michael jordan');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('George'.padStart(25, '+'));

// Masking example
const maskCreditCard = function (number) {
  const str = number + ''; // Converted to String
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234123421321421));
console.log(maskCreditCard('123421421312112312'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));
