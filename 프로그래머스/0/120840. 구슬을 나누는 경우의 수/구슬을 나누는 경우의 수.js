function solution(balls, share) {
    const divide = Array(balls - share).fill(1).reduce((acc, cur, i) => acc * (cur + i), 1);
    return parseInt(Array(balls - share).fill(balls).reduce((acc, cur, i) => acc * (cur - i), 1) / divide);
}