"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , second] = restaurant.categories; // will skip 'Pizzeria'
console.log(main, second);

/*const temp = main;
main = second;
second = temp;
console.log(main, second);*/

// Actual destructing
[main, second] = [second, main]; // A lot easier way
console.log(main, second);

// Destructing with function
let [starter, primary] = restaurant.order(2, 0);
console.log(starter, primary);

// Nested destructing
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested;
//console.log(i, j)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
let [p, q, r = 1] = [8, 9];
console.log(p, q, r);
