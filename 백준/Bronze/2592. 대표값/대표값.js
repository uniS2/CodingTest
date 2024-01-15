const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path, 'utf8').trim().split('\n');
const avg = input.reduce((a, b) => +a + +b, 0) / input.length;

let mostObj = {};
input.forEach(a => {
  if (!mostObj[a]) {
    mostObj[a] = 1;
  } else mostObj[a]++;
})

let temp = 0;
let most = 0;
for (let key in mostObj) {
  if (temp < mostObj[key]) {
    temp = mostObj[key];
    most = key;
  }
}
console.log(`${avg}\n${most}`);