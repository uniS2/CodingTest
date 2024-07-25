const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function sort(input) {
  input.shift();
  return input.sort((a, b) => a - b).join('\n');
}

console.log(sort(input));