'use strict';

// Experimenting API
const now = new Date();
let nationalizedDate = new Intl.DateTimeFormat('en-US').format(now);
console.log(nationalizedDate);

nationalizedDate = new Intl.DateTimeFormat('en-GB').format(now);
console.log(nationalizedDate);

nationalizedDate = new Intl.DateTimeFormat('az-AZ').format(now);
console.log(nationalizedDate);

let options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

nationalizedDate = new Intl.DateTimeFormat('en-US', options).format(now);
console.log(nationalizedDate);

options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

nationalizedDate = new Intl.DateTimeFormat('en-US', options).format(now);
console.log(nationalizedDate);

options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: '2-digit',
  weekday: 'long',
};

nationalizedDate = new Intl.DateTimeFormat('en-US', options).format(now);
console.log(nationalizedDate);

const locale = navigator.language;
console.log(locale);

nationalizedDate = new Intl.DateTimeFormat(locale, options).format(now);
console.log(nationalizedDate);
