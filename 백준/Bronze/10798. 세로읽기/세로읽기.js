const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(i => i.trim());

let result = '';
const length = [...input].sort((a, b) => b.length - a.length)[0].length;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] ? input[j][i] : '';
  }
}
console.log(result);