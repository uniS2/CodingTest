const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const coin = [25, 10, 5, 1];
let result = '';

for (let i = 1; i <= input[0]; i++) {
  for (let j = 0; j <= 2; j++) {
    if (input[i] >= coin[j]) {
      result += Math.trunc(input[i] / coin[j]) + ' ';
      input[i] = Math.trunc(input[i] % coin[j]);
    } else {
      result += 0 + ' ';
    }
  }
  if (input[i] >= coin[3]) {
    result += input[i];
  } else result += 0 + ' ';
  result += '\n';
}

console.log(result);