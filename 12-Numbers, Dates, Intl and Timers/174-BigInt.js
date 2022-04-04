'use strict';

console.log(2 ** 53 - 1); // Biggest number can safely operate
console.log(Number.MAX_SAFE_INTEGER);

// Rest of them can be printed accurately or not
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// We make it BigInt by putting n to end of the number or with BigInt constructor
console.log('---- Bigint examples ----');
console.log(512344124521515155224512562512321n);
console.log(BigInt(512344));

// Operations
console.log('---- Operations ----');
console.log(10000n + 10000n);
console.log(32151251235612231232141231n * 100000000n);

// Error
console.log('---- Error ----');
const huge = 31221512421321213321512321412312n;
const num = 23;
//console.log(huge * num); // Error: Cannot mix BigInt and other types
console.log(huge * BigInt(num)); // Correction

// Exceptions
console.log('---- Exceptions ----');
console.log(20n > 15); // OK
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == '20'); // true

console.log(huge + ' is Really big!!!'); // OK

// Divisions
console.log('---- Division ----');
console.log(10n / 3n); // 3n (nearest n value)
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.33333...
