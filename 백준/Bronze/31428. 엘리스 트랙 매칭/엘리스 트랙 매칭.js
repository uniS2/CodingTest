let [N, info, track] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

info = info.split(' ');
let result = 0;
for (let i = N - 1; i >= 0; i--) {
  if (info[i].trim() == track) result++;
}
console.log(result);