const n = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const max = Math.max(...n);
console.log(max, n.indexOf(max) + 1)