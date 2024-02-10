let [input, ...data] = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const [N, M] = input.split(' ');
data = data.map(d => d.split(' ').map(Number));
const A = data.slice(0, N);
const B = data.slice(N)
let answer = '';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer += (A[i][j] + B[i][j])
    answer += (j != M - 1) ? ' ' : '\n';
  }
}
console.log(answer.trim())