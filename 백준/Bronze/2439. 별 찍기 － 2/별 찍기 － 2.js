const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

for (let i = 1; i <= N; i++) {
  console.log(' '.repeat(N - i) + '*'.repeat(i))
}