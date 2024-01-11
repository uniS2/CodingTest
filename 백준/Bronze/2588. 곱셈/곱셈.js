const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [A, B] = fs.readFileSync(path, 'utf8').trim().split('\n');
const data = [A * B[2], A * B[1], A * B[0], A * B];
data.forEach(a => console.log(a));