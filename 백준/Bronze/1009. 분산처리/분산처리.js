const [T, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let result = '';

for (let i = 0; i < +T; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  let divide = [];
  for (let j = 1; j <= b; j++) {
    if (divide.includes(`${a ** j}`.slice(-1))) break;
    divide.push(`${a ** j}`.slice(-1));
  }
  let cur = divide[b % divide.length - 1] || divide[divide.length - 1];
  result += (cur == 0 ? 10 : cur) + '\n';
}

console.log(result);