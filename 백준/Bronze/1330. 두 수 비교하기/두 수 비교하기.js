const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [A, B] = fs.readFileSync(path, 'utf8').trim().split(' ');
console.log(+A > +B ? '>' : +A < +B ? '<' : '==');