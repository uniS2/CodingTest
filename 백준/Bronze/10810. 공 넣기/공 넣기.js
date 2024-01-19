const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ');

let bucket = Array(+N).fill(0);
for (let n = 1; n <= +M; n++) {
  let [i, j, k] = input[n].split(' ').map(Number);
  bucket = bucket.map((a, b) => {
    if ((b >= i - 1) && (b <= j - 1)) return k;
    else return a;
  })
}
console.log(bucket.join(' '));