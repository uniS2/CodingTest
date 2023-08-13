function solution(n) {
    return Array(Math.ceil(n/2)).fill(1).map((n,i) => n + i*2);
}