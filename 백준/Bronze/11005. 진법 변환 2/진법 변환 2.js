const fs = require('fs');
const [N, B] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(Number(N).toString(B).toUpperCase());