const s = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function solution(str) {
  const zero = str.split('0').filter(i => i.length > 0).length;
  const one = str.split('1').filter(i => i.length > 0).length;

  return zero < one ? zero : one;
}

console.log(solution(s));