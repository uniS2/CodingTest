let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

function solution(input) {
  const num = +input;
  let cycle = 0;

  do {
    if (Number(input) < 10) {
      input = '0' + Number(input);
      input = input[1] + input[1];
    } else {
      const temp = String(Number(input[0]) + Number(input[1]));
      input = input[1] + temp.slice(temp.length - 1);
    }
    cycle++;
  } while (num !== Number(input))

  return cycle;
}

console.log(solution(input));