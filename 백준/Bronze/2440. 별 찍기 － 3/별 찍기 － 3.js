const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let result = '';
for (let i = N; i > 0; i--) {
  result += '*'.repeat(i) + '\n';
}
console.log(result);