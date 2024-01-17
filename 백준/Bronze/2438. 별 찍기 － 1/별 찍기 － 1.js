const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

for (let i = 0; i < N; i++) {
  console.log('*'.repeat(i + 1))
}