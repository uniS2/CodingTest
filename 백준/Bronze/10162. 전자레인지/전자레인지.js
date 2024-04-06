let T = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const time = [300, 60, 10];
let answer = [];

time.forEach((t) => {
  if (Math.trunc(T / t) > 0) {
    answer.push(Math.trunc(T / t));
    T = Math.trunc(T % t);
  } else {
    answer.push(0);
  }
})

if (T > 0) {
  return console.log(-1);
} else return console.log(answer.join(' '));