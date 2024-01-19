const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ');
const bucket = Array(+N).fill(1).map((a, i) => a + i);

for (let s = 1; s <= +M; s++) {
  let [i, j] = input[s].split(' ');
  [bucket[i - 1], bucket[j - 1]] = [bucket[j - 1], bucket[i - 1]];
}
console.log(bucket.join(' '));