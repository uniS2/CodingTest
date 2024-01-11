const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path, 'utf8').trim();
console.log(input === '' ? 0 : input.split(' ').length);