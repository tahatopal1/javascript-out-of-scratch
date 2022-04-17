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
    this.pin = pin; // Protected property

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
    return this; // Make the method chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // Make the method chainable
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
      return this; // Make the method chainable
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

// Chaining
acc1.deposit(300).deposit(500).withdraw(400).requestLoan(25000).withdraw(5000);
console.log(acc1.getMovements());
