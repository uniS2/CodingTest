let [N, score] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

score = score.split(' ').map(Number);
const result = score.map(s => s / Math.max(...score) * 100);
console.log(result.reduce((a, b) => a + b, 0) / N)