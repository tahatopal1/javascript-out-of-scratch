'use strict';

const airline = 'Turkish Airline';
const plane = 'A320';

console.log(plane[0]); // Prints the first letter
console.log(plane[1]); // Prints the second letter
console.log(plane[2]); // Prints the third letter

console.log(airline.length); // Prints the length
console.log('B737'.length); // Works same

console.log(airline.indexOf('r')); // Returns first index of 'r'
console.log(airline.lastIndexOf('r')); // Returns last index of 'r'
console.log(airline.indexOf('Airline')); // Returns first index of 'Airline'

console.log(airline.slice(8)); // Slices the word after 8.th index
console.log(airline.slice(8, 11)); // Slices the world between 8. and 11. indices (not including 11. index)
// last index - first index = length of the result; ex: 'Air' -> 11 - 8 = 3

// Slice without knowing indices
console.log(airline.slice(0, airline.indexOf(' '))); // Slices before first blank
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Slices after last blank

console.log(airline.slice(-2)); // Slices last 2 letters
console.log(airline.slice(1, -1));

// Seat app.
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s == 'B' || s == 'D'
    ? console.log('Not so lucky... 😣')
    : console.log('You got lucky! 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jake')); // Boxing
console.log(typeof new String('Jake')); // Prints 'object'
console.log(typeof new String('Jake').slice(1)); // Prints 'string'
