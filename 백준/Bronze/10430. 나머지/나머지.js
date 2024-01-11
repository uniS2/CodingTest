const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [A, B, C] = fs.readFileSync(path, 'utf8').trim().split(' ');
console.log((+A + +B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
