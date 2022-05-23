'use strict';

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// Promisifying
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // Even simpler way
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(pos => console.log(pos))
  .catch(err => console.log(err));
