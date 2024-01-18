const [_, i, v] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

console.log(i.split(' ').filter(i => i == v).length)