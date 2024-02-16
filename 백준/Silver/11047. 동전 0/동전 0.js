const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let result = 0;

while (K) {
  if (K >= input[N]) {
    result += Math.trunc(K / input[N]);
    K %= input[N];
  }
  N--;
}
console.log(result);