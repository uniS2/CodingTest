const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function press(input) {
  let x = input[1].split(' ');
  const xList = [...new Set(x)].sort((a, b) => +a - +b);
  const xMap = new Map(xList.map((v, i) => [v, i]));
  let output = '';

  for (let i = 0; i < input[0]; i++) {
    output += xMap.get(x[i]) + ' ';
  }
  return output;
}

console.log(press(input));