'use strict';

// Create a date
console.log('---- Creating a Date ----');

// 1.
const now = new Date();
console.log(now);

// 2.
console.log(new Date('Fri Apr 01 2022 11:37:14'));
console.log(new Date('December 24, 2015')); // JS is very smart :)
console.log(new Date('2019-11-18T21:31:17.178Z'));

// Year - Month (0 based) - Day - Hour - Minute - Second
console.log('---- Standart ----');
console.log(new Date(2000, 10, 19, 15, 23, 5));

// Autocorrection - Jumps into next month since it has only 30 days
console.log('---- Auto Correction ----');
console.log(new Date(2000, 10, 33));

// Initial UNIX date
console.log('---- Initial UNIX Date ----');
console.log(new Date(0));

// With timestamp
console.log('---- With TimeStamp ----');
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // days-hours-minutes-seconds-milliseconds

// Working with dates
console.log('---- Working with Dates ----');
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // Zero based
console.log(future.getDate()); // Gets day of the month
console.log(future.getDay()); // Gets day of week (zero based)
console.log(future.getHours()); // Gets day of week (zero based)
console.log(future.getMinutes()); // Gets day of week (zero based)
console.log(future.getSeconds()); // Gets day of week (zero based)

// To ISO String
console.log(future.toISOString());

// Timestamp
console.log('---- TimeStamp ----');
console.log(future.getTime());
console.log(new Date(future.getTime()));

// Current TimeStamp
console.log('---- Current ----');
console.log(Date.now());

// Setting attr
console.log('---- Setting Attr ----');
future.setFullYear(2040);
console.log(future);
