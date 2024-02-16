const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(i => i.trim());

const length = Math.max(...input.map(i => i.length));

let result = '';
for (let i = 0; i < length; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] || '';
  }
}

console.log(result);