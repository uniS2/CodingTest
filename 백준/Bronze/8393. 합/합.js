const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(Array(+input).fill(1).reduce((a, b, i) => a + b + i, 0))