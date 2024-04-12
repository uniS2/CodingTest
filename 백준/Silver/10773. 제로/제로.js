const [K, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

let result = [];

for (let i = 0; i < K; i++) {
  if (input[i] > 0) {
    result.push(input[i]);
  } else {
    result.pop();
  }
}

console.log(result.reduce((a, b) => a + b, 0))