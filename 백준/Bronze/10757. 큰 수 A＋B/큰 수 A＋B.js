const [A, B] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(String(BigInt(A) + BigInt(B)));