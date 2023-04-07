const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages[0]);
console.log(ages[ages.length - 1]);

console.log(ages.length);
console.log(ages);

if (ages.length % 2 != 0) {
  let sum = ages[ages.length / 2 + 1] + ages[ages.length / 2 - 1];
  console.log(sum / 2);
} else {
  console.log(ages[ages.length / 2]);
}
let total = 0;

for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
console.log(total / ages.length);

console.log(ages[ages.length - 1] - ages[0]);
