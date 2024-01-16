const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [current, cook] = fs.readFileSync(path, 'utf8').trim().split('\n');
let [hour, second] = current.split(' ').map(Number);
if (second + +cook >= 60) {
  hour += Math.trunc((second + +cook) / 60);
  second = Math.trunc((second + +cook) % 60);
} else {
  second += +cook;
}
hour = Math.trunc(hour % 24);

console.log(`${hour} ${second}`)