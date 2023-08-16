function solution(box, n) {
    return box.map(x => Math.floor(x / n)).reduce((x, y) => x * y, 1);
}