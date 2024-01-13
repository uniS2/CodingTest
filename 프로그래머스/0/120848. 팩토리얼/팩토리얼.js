function solution(n) {
    let i = 1;
    let result = 1;
    while (result <= n) result *= ++i;
    return --i;
}