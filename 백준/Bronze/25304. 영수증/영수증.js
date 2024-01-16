let [X, N, ...cost] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let sum = 0;
while (N) {
  sum += cost[cost.length - N].split(' ').reduce((a, b) => a * b, 1)
  N--;
}
console.log(X == sum ? 'Yes' : 'No')