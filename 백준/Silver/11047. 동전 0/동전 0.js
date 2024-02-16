let [index, ...coin] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, K] = index.split(' ').map(Number);
let result = 0;

while (K) {
  if (K >= Number(coin[N])) {
    result += Math.trunc(K / Number(coin[N]));
    K = K % Number(coin[N]);
  }
  N--;
}
console.log(result);