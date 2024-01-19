const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let bucket = Array(N).fill(1).map((a, i) => a + i);

for (let n = 1; n <= M; n++) {
  let [i, j] = input[n].split(' ');
  bucket.splice(i - 1, Math.abs(i - j) + 1, ...bucket.slice(i - 1, j).reverse());
}
console.log(bucket.join(' '));