'use strict';

// Another way to create Maps (by using Arrays)
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎇'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 fours
    close: 24,
  },
};
console.log(Object.entries(openingHours)); // Object.entries -> Arrays of arrays
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
// Looping maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
  3;
}

const answer = Number(prompt('Your answer:'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);

// Entries, keys and values
console.log([...question.entries()]); // same with ...question
console.log([...question.keys()]);
console.log([...question.values()]);
