const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

let answer = '';
for (let i = 1; i <= N; i++) {
  answer += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n'
}
for (i = N - 1; i >= 1; i--) {
  answer += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n'
}

console.log(answer.slice(0, -1));