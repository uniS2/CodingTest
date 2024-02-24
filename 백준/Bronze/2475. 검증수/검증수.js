const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(input.reduce((acc, cur) => acc + cur ** 2, 0) % 10)