const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
console.log(+N[0] + +N[1]);