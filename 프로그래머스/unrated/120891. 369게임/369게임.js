function solution(order) {
    return [...String(order)].filter(i => (i != 0) && !(i % 3)).length;
}