const [a, b, c, d, e, f] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, b, c, d, e, f) {
  let gcd = 1;
  for (let i = Math.min(a, d); i > 0; i--) {
    if (a % i === 0 && d % i === 0) {
      gcd = i;
      break;
    }
  }

  let [x, y] = [d / gcd, a / gcd]

  y = (c * x - f * y) / (b * x - e * y);
  x = (c - b * y) / a || (f - e * y) / d;

  return `${x} ${y}`;
}

console.log(solution(a, b, c, d, e, f));