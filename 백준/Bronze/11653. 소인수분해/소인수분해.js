const fs = require('fs');
let N = fs.readFileSync('/dev/stdin', 'utf8').trim();

let result = '';
let i = 2;

while (N != 1) {
  if (!(N % i)) {
    result += `${i}\n`
    N /= i;
  } else i++;
}

console.log(result);