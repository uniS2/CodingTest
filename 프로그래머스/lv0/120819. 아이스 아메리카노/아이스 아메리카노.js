function solution(money) {
    let arr = [Math.floor(money / 5500), Math.floor(money % 5500)];
    return arr;
}