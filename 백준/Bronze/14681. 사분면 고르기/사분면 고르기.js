const input = require('fs').readFileSync(0).toString().split('\n');

if (+input[0] > 0) {
  console.log((+input[1] > 0) ? 1 : 4);
} else {
  console.log((+input[1] > 0) ? 2 : 3);
}