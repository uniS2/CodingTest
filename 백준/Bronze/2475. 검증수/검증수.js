const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(input.map(v => v ** 2).reduce((a, b) => a + b) % 10);