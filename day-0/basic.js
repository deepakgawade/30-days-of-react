console.log("Started with git ");

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

const fruits = ["bannana", "pineapple", "grapes", "watermelon"];
let item = fruits.indexOf("bannana");
if (item != -1) {
  console.log("Found");
} else {
  console.log("you should buy one");
}
console.log(fruits.includes("Bannana"));
