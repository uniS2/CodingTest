const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(v => v.split(' '));

let N = +input.shift()[0];
let money = 0;
const package = Math.min(...input.map(v => +v[0]));
const each = Math.min(...input.map(v => +v[1]));

if (N >= 6) {
  if (package <= each * 6) {
    money += package * Math.floor(N / 6);
  } else {
    money += each * 6 * Math.floor(N / 6);
  }
  N %= 6;
}

if (N > 0) {
  if (package <= each * N) {
    money += package;
  } else {
    money += each * N;
  }
}

console.log(money);