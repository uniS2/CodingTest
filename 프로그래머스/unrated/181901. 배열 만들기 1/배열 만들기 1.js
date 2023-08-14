function solution(n, k) {
    return new Array(Math.floor(n / k)).fill(1).map((n, i) => (n + i) * k);
}