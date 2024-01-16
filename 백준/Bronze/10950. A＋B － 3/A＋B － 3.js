let [T, ...test] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

while (T) {
  console.log(test[test.length - T].split(' ').reduce((a, b) => +a + +b, 0))
  T--;
}