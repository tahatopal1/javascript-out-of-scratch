'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// Foreach is a higher-order function which reqiures a callback function
console.log('---- FOREACH ----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Processing with index
console.log('---- WITH INDEX ----');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement: ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH WITH INDEX ----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement: ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement: ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// 🟡 You cannot break out foreach loops like you can do it to generic for loops
