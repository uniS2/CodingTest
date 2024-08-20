let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function solution(input) {
  let n = input.length;
  let output = [];

  while (n > 0) {
    const temp = input.slice(0, 10);
    input = input.slice(10);
    output.push(temp)
    n -= 10;
  }

  return output.join('\n');
}

console.log(solution(input));