const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(Math.abs(N - M));