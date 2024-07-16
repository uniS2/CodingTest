const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const degree = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function triangle(degree) {
  if (degree.reduce((acc, cur) => acc + cur, 0) != 180) {
    return 'Error';
  }
    
  const set = new Set(degree);
  if (set.size === 1) {
    return 'Equilateral';
  } else if (set.size === 2) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}

console.log(triangle(degree));