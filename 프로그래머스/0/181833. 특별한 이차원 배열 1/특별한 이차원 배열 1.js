function solution(n) {
  let arr = Array(n).fill();
  let anw = arr.map((v) => Array(n).fill(0));
  return anw.map((v, i) => {
    v[i] = 1;
    return v;
  });
}