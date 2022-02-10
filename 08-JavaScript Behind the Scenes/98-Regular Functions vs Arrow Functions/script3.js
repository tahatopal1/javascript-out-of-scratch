// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments); // Argmunets is not defined error, arguments only exist in regular functions
  return a + b;
};

addArrow(2, 5, 8);
