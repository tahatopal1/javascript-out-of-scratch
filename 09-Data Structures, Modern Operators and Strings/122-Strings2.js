'use strict';
const airline = 'Turkish Airlines';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'mIcHaEl';
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.toLowerCase().slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@john.io';
let loginEmail = '   Hello@John.io \n'; // Still compare these two
const loginEmail2 = '   Helloooo@John.io \n'; // Not must ne be the same

const lowerEmail = loginEmail.toLowerCase(); // converted lowercase
let trimmedEmail = lowerEmail.trim(); // removed all blanks at beginning and end
console.log(trimmedEmail);
console.log(email === trimmedEmail);

// or it could be done by chaining
loginEmail = '   Hello@John.io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23! Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // Only works for first occurence

// For all occurences, we use replaceAll
console.log(announcement.replaceAll('door', 'gate'));

// Replacing with RegEx, it will replace all
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';

// includes
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

// starts with
console.log(plane.startsWith('Ai'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of new airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
