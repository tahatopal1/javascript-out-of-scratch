'use strict';

const num = 3884764.23;

console.log('US: ', new Intl.NumberFormat('en-US').format(num));
console.log('DE: ', new Intl.NumberFormat('de-DE').format(num));
console.log(
  'Browser : ',
  new Intl.NumberFormat(navigator.language).format(num)
);

let options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('DE: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  'Browser : ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);

options = {
  style: 'unit',
  unit: 'celsius',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('DE: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  'Browser : ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);

options = {
  style: 'percent',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('DE: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  'Browser : ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);

options = {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false, // Disables separators
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('DE: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  'Browser : ',
  new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'EUR',
  }).format(num)
);
