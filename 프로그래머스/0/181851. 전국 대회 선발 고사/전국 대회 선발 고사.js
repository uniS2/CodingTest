function solution(rank, attendance) {
  let result = {};
  rank.forEach((v, i) => attendance[i] && (result[i] = v));
  result = Object.entries(result).sort(([a, b], [c, d]) => b - d);
  return 10000 * result[0][0] + 100 * result[1][0] + Number(result[2][0]);
}