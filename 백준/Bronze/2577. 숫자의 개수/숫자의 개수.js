const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = Array(10).fill(0);
[...String(input[0] * input[1] * input[2])].forEach(v => {
  result[v]++;
})
console.log(result.join('\n'));