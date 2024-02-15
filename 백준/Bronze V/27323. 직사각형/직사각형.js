const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
console.log(input[0] * input[1]);