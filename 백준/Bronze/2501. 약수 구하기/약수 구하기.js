const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

let result = [];
for (i = 1; i <= input[0]; i++) {
  if (input[0] % i === 0) result.push(i);
}
console.log(result[input[1] - 1] || 0);