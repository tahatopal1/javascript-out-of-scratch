'use strict';

/*

    🟢 A closure is the closed-over "variable environment" of the execution context "in which a function was created", even "after" that exection context is gone;

    🟢 A closure gives a function access to all the variables "of its parent function", even "after" that parent function has returned. The function keeps a "reference" to its outer scope, which "preserves" the scope chain throughout time.

*/

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
