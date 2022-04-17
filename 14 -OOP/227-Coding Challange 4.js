'use strict';

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 20;
    let msg = `${this.make} going at ${this.speed} km/h`;
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Public API
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`Charged to: ${chargeTo}`);
    return this;
  }

  // Here comes the overriding
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const car = new EV('Rivian', 120, '23%');
car.chargeBattery(90).accelerate().accelerate().brake().brake();
