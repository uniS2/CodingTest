let n = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function solution(change) {
  let cntAll = 0;
  let cnt5 = Math.floor(change / 5);

  if (cnt5 > 0 && (change - cnt5 * 5) % 2 === 1) {
    cnt5--;
  }

  cntAll += cnt5;
  change -= cnt5 * 5;
  if (change % 2 != 0) return -1;
  cntAll += change / 2;

  return cntAll;
}

console.log(solution(Number(n)));