const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [A, B] = fs.readFileSync(path, 'utf8').trim().split(' ');

const input = [A.replaceAll(6, 5), B.replaceAll(6, 5), A.replaceAll(5, 6), B.replaceAll(5, 6)].map(Number);

console.log(input[0] + input[1], input[2] + input[3]);