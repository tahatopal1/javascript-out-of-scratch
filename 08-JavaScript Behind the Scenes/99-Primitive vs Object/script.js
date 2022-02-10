"use strict";

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jess = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJess = jess;
marriedJess.lastName = "Davis";
console.log("Before marriage:", jess);
console.log("After marriage:", marriedJess); // Will print exactly the same output
console.log("***************");
// marriedJess = {}; not possible since it's a const variable

// Copying objects
const jess2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  fam: ["Alice", "Bob"],
};

// Makes shallow copy, does not produce deep copy just like clone() function in Java
const jessCopy = Object.assign({}, jess2);
jessCopy.lastName = "Davis";
jessCopy.fam.push("Mary");
jessCopy.fam.push("John");

console.log("Before marriage:", jess2);
console.log("After marriage:", jessCopy); // Will print exactly different output
