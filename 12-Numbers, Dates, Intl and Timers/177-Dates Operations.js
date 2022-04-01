'use strict';
// Calculating day passed between to dates
const future = new Date(2000, 10, 19, 15, 13);
console.log(+future); // Converting Number to fetch timestamp

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2000, 3, 4), new Date(2000, 3, 14));
console.log(days1);

const days2 = calcDaysPassed(
  new Date(2000, 3, 4),
  new Date(2000, 3, 14, 10, 8)
);
console.log(days2);
console.log(Math.round(days2));
