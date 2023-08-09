function solution(n) {
    const count = Math.floor(n/7);
    return (n%7) ? count + 1 : count;
}