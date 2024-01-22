const word = require('fs').readFileSync('/dev/stdin', 'utf8').trim().toUpperCase();

let most = {};
for (let w of word) {
  !most[w] ? most[w] = 1 : most[w]++;
}

const mostValue = Object.values(most).sort((a, b) => b - a);

if (mostValue[0] == mostValue[1]) {
  console.log("?");
} else {
  for (let [key, value] of Object.entries(most)) {
    if (Math.max(...mostValue) === value) console.log(key);
  };
}