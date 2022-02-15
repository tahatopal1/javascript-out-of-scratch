'use strict';

// Enhancement: Setting variable name with values
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  /*thu*/ [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  /*fri*/ [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  /*sat*/ [`day-${2 + 4}`]: {
    open: 0, // Open 24 fours
    close: 24,
  },
};

console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  /*order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00', // With default value
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },*/

  // ES6 enhanced object definition
  // Basically deleting the function keyword and colon
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00', // With default value
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

console.log(restaurant.openingHours);
