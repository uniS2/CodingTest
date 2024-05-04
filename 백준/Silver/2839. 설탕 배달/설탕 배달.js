const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];
let cnt = 0;

while (true) {
  if (input % 5 === 0) {
    cnt += input / 5;
    console.log(cnt);
    break;
  }
  if (input < 0) {
    console.log(-1);
    break;
  }
  cnt++;
  input -= 3;
}