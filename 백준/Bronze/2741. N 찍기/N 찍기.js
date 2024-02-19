const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(Array(+N).fill(1).map((v, i) => v + i).join('\n'));