const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const y = fs.readFileSync(path, 'utf8').trim();
console.log(y - 543);