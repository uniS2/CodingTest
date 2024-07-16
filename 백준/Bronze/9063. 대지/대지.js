const fs = require('fs');
let [count, ...point] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

point = point.map(v => v.split(' ').map(Number));

function area(point) {

  const x = point.map(v => v[0]);
  const y = point.map(v => v[1]);

  return ((Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)))
}

console.log(count < 2 ? 0 : area(point));