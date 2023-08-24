function solution(n) {
    const arr = new Array(n).fill(1).map((v, i) => v + i);
    return (n % 2) ? arr.filter(i => (i % 2)).reduce((a, b) => a + b, 0)
        : arr.filter(i => !(i % 2)).reduce((a, b) => a + b**2, 0);
}