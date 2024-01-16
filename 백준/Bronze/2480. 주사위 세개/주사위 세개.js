const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const dice = fs.readFileSync(path, 'utf8').trim().split(' ');

if ((dice[0] == dice[1]) && (dice[1] == dice[2])) {
  console.log(10000 + dice[0] * 1000);
} else if ((dice[0] != dice[1]) && (dice[1] != dice[2]) && (dice[2] !== dice[0])) {
  console.log(Math.max(...dice) * 100);
} else if (dice[0] == dice[1] || dice[0] == dice[2]) {
  console.log(1000 + dice[0] * 100);
} else {
  console.log(1000 + dice[1] * 100);
}