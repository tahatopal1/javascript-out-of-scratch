'use strict';

// const lottery = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You WIN 💰'); // Mark this as a fullfilled promise
//   } else {
//     reject('You lost your money 💩'); // Will handled in the catch block with the denoted message
//   }
// });

const lottery = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening ⏳');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰'); // Mark this as a fullfilled promise
    } else {
      reject(new Error('You lost your money 💩')); // Will handled in the catch block with the denoted message
    }
  }, 2000);
});

lottery.then(res => console.log(res)).catch(err => console.error(err));

// Promosifying setTimeout
const wait = function (seconds) {
  // Won't fail, only wait for some time so no need to reject function
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    // We could now run any code that we wanted to be executed after 2 seconds
    console.log('I waited for 2 seconds');
    return wait(1); // Chained - we can use 'then' again
  })
  .then(() => console.log('I waited for 1 second'));

// Another way to create a fullfilled promise
Promise.resolve('abc').then(x => console.log(x)); // This will be resolved immediately

// Opposite - recejt
Promise.reject(new Error('abc')).catch(x => console.error(x));
