function solution(number, n, m) {
    return +(Number.isInteger(number / n) && Number.isInteger(number / m));
}