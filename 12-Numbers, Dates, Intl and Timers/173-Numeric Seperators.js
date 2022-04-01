'use strict';

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // Prints 287460000000

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500; // They are the same

const PI = 3.14_15; // That's ok
// Some typos: _3.1415, 3_.1415, 3._1415, 3.1415_

console.log(Number('230_000')); // Prints NaN
console.log(parseInt('230_300')); // Prints 230, not 230000
