const [T, ...test] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

for (let i = 0; i < T; i++) {
  console.log(`Case #${i+1}: ${test[i].split(' ').reduce((a, b) => +a + +b, 0)}`)
}