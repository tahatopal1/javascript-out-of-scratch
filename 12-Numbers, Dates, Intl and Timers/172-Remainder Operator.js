'use strict';

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(5 % 3);
console.log(5 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

console.log('---- isEven ----');
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

console.log('---- isDivisable ----');
const isDivisable = (n, d) => n % d === 0;
console.log(isDivisable(8, 4));
console.log(isDivisable(23, 4));
console.log(isDivisable(514, 4));
