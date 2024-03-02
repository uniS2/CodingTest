const fs = require('fs');
const [x, y, w, h] = fs.readFileSync('dev/stdin', 'utf8').trim().split(' ');

console.log(Math.min(x, y, w - x, h - y));