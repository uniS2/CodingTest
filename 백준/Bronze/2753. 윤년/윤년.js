const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const year = fs.readFileSync(path, 'utf8').trim();
console.log((year % 4 === 0) && (year % 100 !== 0) ? 1
  : +(year % 400 === 0));