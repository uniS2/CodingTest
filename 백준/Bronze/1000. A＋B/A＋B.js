const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const data = fs.readFileSync(path, 'utf8').trim();
console.log(data.split(' ').reduce((a, b) => +a + +b, 0))