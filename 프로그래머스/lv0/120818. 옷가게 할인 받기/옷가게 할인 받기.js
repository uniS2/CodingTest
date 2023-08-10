function solution(price) {
    price *= (price >= 500_000) ?  0.8
    : (price >= 300_000) ? 0.9
    : (price >= 100_000) ? 0.95 : 1;
    return parseInt(price);
}