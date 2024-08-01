const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(input) {
  let gcd = Math.min(...input);
  for (let i = gcd; i > 0; i--) {
    if (input[0] % i === 0 && input[1] % i === 0) {
      gcd = i;
      break;
    }
  }
  const lcd = input[0] * input[1] / gcd;
  return `${gcd}\n${lcd}`;
}

console.log(solution(input));