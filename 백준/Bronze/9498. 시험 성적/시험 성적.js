const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const score = fs.readFileSync(path, 'utf8').trim();
if (score >= 90) console.log('A');
else if (score >= 80) console.log('B');
else if (score >= 70) console.log('C');
else if (score >= 60) console.log('D');
else console.log('F');