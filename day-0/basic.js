//import { counteries } from "./counteries.js";
const counteries = require("./counteries");
const PI = 3.14;
let js = "Javascript";
const character = js.split("");
console.log(character);

const arr = Array(10).fill(null);
console.log(arr);

const firtist = [1, 2, 3];
const secondlist = [4, 5, 6];

console.log([...firtist, ...secondlist]);

console.log(firtist.concat(secondlist));

const fruits = [
  "bannana",
  "pineapple",
  "grapes",
  "watermelon",
  "mango",
  "orange",
];
let item = fruits.indexOf("bannana");
if (item != -1) {
  console.log("Found");
} else {
  console.log("you should buy one");
}
console.log(fruits.includes("Bannana"));

const otherFruits = fruits.slice(0, 3);
console.log(otherFruits);

const myNumbers = [1, 2, 3, 4, 5, 6];

const myNumbers1 = [1, 2, 3, 4, 5, 6];
console.log(myNumbers.splice(0, 1));
console.log(myNumbers1.splice(2, 2, 8));
console.log(myNumbers1);

console.log(counteries);

if (counteries.indexOf("Ethiopia") != -1) {
  console.log("Ethiopia".toUpperCase());
} else {
  counteries.push("Ethiopia");
  console.log(counteries);
}

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }