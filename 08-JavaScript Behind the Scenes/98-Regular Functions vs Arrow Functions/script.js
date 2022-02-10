// var definition means we have set an attribute to window like: window.firstName
// Eventually, this.firstName in arrow function will write 'Mary'
var firstName = "Mary";

const john = {
  firstName: "John",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // this indicates the 'window'
  },
};

john.greet();
