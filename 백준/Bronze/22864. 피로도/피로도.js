const [a, b, c, m] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, b, c, m) {
  let fatigue = 0;
  let max_work = 0;

  for (let time = 0; time < 24; time++) {
    if (fatigue + a <= m) {
      fatigue += a;
      max_work += b;
    } else {
      fatigue -= c;
      if (fatigue < 0) fatigue = 0;
    }
  }

  return max_work;
}

console.log(solution(a, b, c, m));