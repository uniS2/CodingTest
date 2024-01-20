let number = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

number = number.map(i => i[2] + i[1] + i[0]);
console.log(Math.max(...number));