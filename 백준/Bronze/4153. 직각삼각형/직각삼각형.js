const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function right(input) {
  let answer = [];

  for (let i = 0; i < input.length - 1; i++) {
    const [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);

    if (a ** 2 + b ** 2 === c ** 2) {
      answer.push('right');
    } else {
      answer.push('wrong');
    }
  }
  return answer.join('\n');
}
console.log(right(input));