const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(i => i.trim());

function solution(input) {
  let result = [];

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] == 0) break;
    if (+input[i] === +[...input[i]].reverse().join('')) {
      result.push('yes');
    } else {
      result.push('no');
    }
  }

  return result.join('\n')
}

console.log(solution(input));