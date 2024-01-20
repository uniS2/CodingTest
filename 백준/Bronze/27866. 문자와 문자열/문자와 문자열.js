const [S, i] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
console.log(S[i - 1]);