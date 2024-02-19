let [N, info, track] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

info = info.trim().split(' ');
let result = 0;
for (let i = 0; i < N; i++) {
  if (info[i] == track) result++;
}
console.log(result);