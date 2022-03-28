'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

const word = 'JavaScript is the best!';

transformer(word, upperFirstWord);
transformer(word, oneWord);

// JS uses callbacks all the time
const high5 = function (str = 'Button') {
  console.log('👏 ' + str);
};

const newButton = document.createElement('button');
const textNode = document.createTextNode('Click Here!');
newButton.appendChild(textNode);
document.body.append(newButton);

newButton.addEventListener('click', high5);
['Jonas', 'Adam', 'Martha'].forEach(high5);
