'use strict';

// Promise.race
// promises starts a race and first one that settles is winner
// Even the promise got rejected, first one that settled prevents other ones

// Methods from previous section

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// Methods from previous section

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

// Timeout promise
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

// Race against timeout (5 seconds)
Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(5)])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled
// Returns an array of all the settled promises (no matter promises rejected or not)
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Unlike Promise.allSettled, will cause a short circuit
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Promise.any
// Similar to Promise.race, but ignores rejected promises. So settles the first promise that's not rejected
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
