'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin; // Protected property
    this._movements = []; // Protected property
    this.locale = navigator.language;

    // Some code execution
    console.log(`Thanks for openning an account ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  // Public interface our objects (API)
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // We don't want to expose it
  // Protected method
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
    }
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
