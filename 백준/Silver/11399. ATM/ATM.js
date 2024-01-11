const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, P] = fs.readFileSync(path, 'utf8').trim().split('\n');
const answer = P.split(' ').sort((a, b) => +a - +b).map((v, i) => v * (N - i)).reduce((a, b) => a + b, 0);
console.log(answer);