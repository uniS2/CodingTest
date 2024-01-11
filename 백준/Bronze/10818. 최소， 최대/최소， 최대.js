const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, I] = fs.readFileSync(path, 'utf8').trim().split('\n');
const sorted = I.split(' ').sort((a, b) => +a - +b);
console.log(sorted[0] + ' ' + sorted[N - 1])