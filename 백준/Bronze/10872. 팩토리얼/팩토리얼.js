const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

function factorial(n) {
  if (n == 0) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(input));