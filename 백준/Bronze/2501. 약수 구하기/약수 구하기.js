const [p, q] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let result = [];
for (i = 1; i <= p; i++) {
  if (p % i === 0) result.push(i);
  if (result.length == q) break;
}
console.log(result[q - 1] || 0);