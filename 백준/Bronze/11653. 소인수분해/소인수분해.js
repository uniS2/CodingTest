const fs = require('fs');
let N = fs.readFileSync('/dev/stdin', 'utf8').trim();

let result = [];
let i = 2;

while (N != 1) {
  if (!(N % i)) {
    result.push(i);
    N /= i;
  } else i++;
}

console.log(result.join('\n'));