const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
console.log(input[1].split('').reduce((a, b) => +a + +b, 0));