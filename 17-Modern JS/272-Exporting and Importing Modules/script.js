// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
//   qty,
// } from './shopping-cart.js';
import * as ShoppingCart from './shopping-cart.js'; // Import all (Named import)
import message from './sample-for-default-import.js'; // (Default import)
console.log('Importing module');

message('Hello');

ShoppingCart.addToCart('bread', 5);
console.log(
  ShoppingCart.totalPrice,
  ShoppingCart.totalQuantity,
  ShoppingCart.qty
);
