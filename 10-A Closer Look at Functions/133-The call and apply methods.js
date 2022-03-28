'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
//console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23,'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams'); // (eurowings = this)
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper'); // (lufthansa = this)
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
//console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// Do it with the call by using spread operator
book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
// This will not call function, it will return a function instead
// It will only bind 'eurowings' as this
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');

// Binding the function for one specific airline and flight number
const bookEW1223 = book.bind(eurowings, 1223); // 23 is pre-set
bookEW1223('Jonas Schmedtmann');
bookEW1223('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Creating new button to try it
const newButton = document.createElement('button');
newButton.classList.add('buy');
const textNode = document.createTextNode('Buy a new Plane ✈');
newButton.appendChild(textNode);
document.body.append(newButton);

// This keyword will indicate the button element
// So logic won't work
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// Correction with bind
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (pre-set parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

// Without bind
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
