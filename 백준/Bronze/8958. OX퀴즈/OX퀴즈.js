let [count, ...test] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

while (count) {
  console.log(test[test.length - count].trim().split('X').map(t => {
    let score = 0;
    let temp = 0;
    for (temp; temp < t.length;) {
      score += ++temp;
    }
    return score;
  }).reduce((a, b) => a + b, 0))
  count--;
}