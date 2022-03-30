'use strict';
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

function calcAverageHumanAge(dogs) {
  return dogs
    .map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter(dog => dog >= 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0); // With more cool way
  //.reduce((acc, dog) => acc + dog, 0);
  //return totalAge / dogs.length;
  // Average 1: 2-3 -> (2+3)/2 = Average
  // Average 2: 2-3 -> (2/2+3/3) = Average (more cooool)
}

const avgJulia = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avgJulia);

const avgKate = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avgKate);
