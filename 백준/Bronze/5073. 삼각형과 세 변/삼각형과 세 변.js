const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(v => v.split(' ').map(Number).sort((a, b) => a - b));

function triangle(length) {
  let answer = [];

  for (let i = 0; i < length.length - 1; i++) {
    if (length[i][0] + length[i][1] <= length[i][2]) {
      answer.push('Invalid');
      continue;
    }
    const set = new Set(length[i]);

    if (set.size === 1) {
      answer.push('Equilateral');
    } else if (set.size === 2) {
      answer.push('Isosceles');
    } else {
      answer.push('Scalene');
    }
  }

  return answer.join('\n');
}

console.log(triangle(input));