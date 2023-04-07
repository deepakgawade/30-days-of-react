let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

words = text.split(" ");

console.log(words);

for (let i = 0; i < words.length; i++) {
  let oneword = words[i].split("");
  if (oneword.includes(".") || oneword.includes(",")) {
    oneword.splice(oneword.length - 1, 1);
    let oneword1 = oneword.join("");
    words.splice(i, 1, oneword1);
  }
}

console.log(words);
console.log(words.length);
