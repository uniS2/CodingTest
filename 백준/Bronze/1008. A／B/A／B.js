const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [a, b] = fs.readFileSync(path, 'utf8').trim().split(' ');
console.log(a / b)