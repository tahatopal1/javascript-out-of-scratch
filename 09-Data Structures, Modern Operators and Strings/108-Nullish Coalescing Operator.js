let numGuests = 0;

// Checks falsy values
const guests = numGuests || 10;
console.log(guests);

// Nullish: null and undefined (Not 0 or '')
const guestsCorrect = numGuests ?? 10;
console.log(guestsCorrect);
