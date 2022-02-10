const john = {
  firstName: "John",
  year: 1991,
  calcAge: function () {
    console.log(2022 - this.year);
    /*const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); This will occur an error since 'this' will be undefined */
    // 1. fixing option:
    /*const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();*/
    // 2. and modern fixing option:
    const isMillenial = () => {
      console.log(this); // 'this' keyword references the parent object
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // this indicates the 'window'
  },
};

john.greet();
john.calcAge();
