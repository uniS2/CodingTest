const fs = require('fs');
let N = fs.readFileSync('/dev/stdin', 'utf8').trim();
let result = '';
let i = 2;

for (N; N > 1; N) {
  if (!(N % i)) {
    result += `${i}\n`
    N /= i;
  } else i++;
}
console.log(result);