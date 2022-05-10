'use strict';

console.log('Test start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 2
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res); // 4
});

console.log('Test end'); // 5

// Logging order: 1 - 5 - 3 - 4 - 2
// ✅ Microtasks have priority over callback methods
// ✅ "Resolved promise 2" makes timeout logging wait a long time so that it waits more than 0 minutes
