'use strict';

// IIFE (It will only run for once)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// Out of scope
//console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

// IIFE is also used for holding private values
// But now, we are using blocks instead for encapsulation of private values

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// Out of scope
//console.log(isPrivate);
console.log(notPrivate);
