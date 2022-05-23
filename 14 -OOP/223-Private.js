'use strict';

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // Instance side
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin; // Private property

    // Some code execution
    console.log(`Thanks for openning an account ${owner}`);
  }

  // Prototype side

  getMovements() {
    return this.#movements;
  }

  // 3) Public methods
  // Public interface our objects (API)
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
    }
  }

  static helper() {
    console.log('Helper method...');
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// We should not interact the property itself, we can create methods to do it instead
// We can avoid bugs by doing that
//acc1.movements.push(250);
//acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements); ERROR!!!
// console.log(acc1.#pin); ERROR!!!
//console.log(acc.#approveLoan(1000));

Account.helper(); // Only accessible for class itself, not for instances (objects)
