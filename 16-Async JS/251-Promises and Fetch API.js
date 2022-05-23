'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);

// Promise
/*

  🟢 An object that is used as a placeholder for the future result of an asynchronous operation

  🟢 A container for an asynchronously delivered value

  🟢 A container for a future value (Example: Response from AJAX call)

  ✅ We no longer need to rely events and callbacks passed into asynchronous functions handle asynchronous results

  ✅ Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations and escape callback hell 👌

  🟡 Analogy: Lottery ticket

    ✏️ I buy lottery ticket (promise) right now

    ✏️ Lottery draw happens asynchoronously

    ✏️ If correct outcome, I receive money, because it was promised


*/
