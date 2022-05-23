//import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import lodash from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 10 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
const stateDeepClone = lodash.cloneDeep(state);

state.user.loggedIn = false;
console.log('stateClone', stateClone);

console.log('stateDeepClone', stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(state.cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable'; // For polyfilling
import 'regenerator-runtime/runtime'; // Polyfilling async functions
