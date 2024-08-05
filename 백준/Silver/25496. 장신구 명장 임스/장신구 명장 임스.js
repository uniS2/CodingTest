const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(input) {
  let [p, n] = input[0].split(' ').map(Number);
  const aList = input[1].split(' ').map(Number).sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (p < 200) {
      p += aList[i];
      result++;
    }
  }
  return result;
}

console.log(solution(input));