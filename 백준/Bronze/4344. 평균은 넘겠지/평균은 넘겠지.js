const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = '';
for (let i = 1; i <= input[0]; i++) {
  let [N, ...score] = input[i].split(' ');
  let avg = score.map(Number).reduce((cur, acc) => cur + acc, 0) / N;
  result += `${(score.filter(s => s > avg).length * 100 / N).toFixed(3)}%` + '\n';
}
console.log(result);