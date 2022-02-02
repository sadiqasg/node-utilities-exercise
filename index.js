const { largeNumber, cut3 } = require("./utilities/functionOne.js");
const { sum, concat } = require("./utilities/functionTwo.js");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

console.log("Sum: ", sum(arr1));
console.log("Concated array 1 & 2: ", concat(arr1, arr2));
console.log("Largest: ", largeNumber(arr1));
console.log("Remove 3rd item: ", cut3(arr2));