const fs = require('fs');
const N = fs.readFileSync('/dev/stdin', 'utf8').trim();

let cycle = 2;
let sum = 1;

while (sum < +N) {
  sum += Array(3).fill(cycle)
    .map((_, index) => cycle - index)
    .reduce((a, b) => a + b, 0) * 2;
  cycle++;
}

return console.log(--cycle);