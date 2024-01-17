const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(('long ').repeat(Math.ceil(input / 4) - 1) + 'long int')