// https://lodash.com/docs/

const _ = require("lodash");
// Example usage of Lodash functions

const num = _.random(0, 10);

const greet_only_once = _.once(() => console.log("Hello!"));
greet_only_once(); // This will execute
greet_only_once(); // This will not execute

// 1. Working with Arrays
const numbers = [1, 2, 3, 4, 5];

// Check if all elements in an array meet a condition
const allEven = _.every(numbers, (num) => num % 2 === 0);

// Filter elements based on a condition
const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);

// Group elements by a property
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];
const groupedByAge = _.groupBy(people, "age");

// 2. Working with Objects
const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

// Deeply clone an object
const deepClone = _.cloneDeep(user);

// Merge objects
const defaults = { role: "user", permissions: ["read"] };
const customSettings = { permissions: ["write"] };
const mergedSettings = _.merge(defaults, customSettings);

// 3. String Manipulation
const sentence = "Lodash is a powerful utility library";

// Capitalize the first letter of each word
const capitalized = _.startCase(sentence);

// Pad a string to a certain length with a specified character
const padded = _.padEnd("Hello", 8, "!"); // Hello!!!
