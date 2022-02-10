console.log(this); // Prints 'window'

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // Prints 'undefined'
};

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); // Prints 'window'
};

calcAgeArrow(1980);

const john = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Prints object 'john'
    console.log(2022 - this.year);
  },
};

john.calcAge();

const jane = {
  year: 2017,
};

// Method borrowing
jane.calcAge = john.calcAge;
jane.calcAge(); // this will print object 'jane'

const f = john.calcAge;
f(); // this will print 'undefined'
