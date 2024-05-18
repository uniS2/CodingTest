const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let [A, B, V] = fs.readFileSync(path, 'utf8').trim().split(' ').map(Number);

V -= A;
console.log(Math.ceil(V / (A - B) + 1));