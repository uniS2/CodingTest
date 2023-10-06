function solution(n) {
    return !(n % 6) ? n / 6
        : !(n % 2) ? n / 2
        : !(n % 3) ? n / 3 : n;
}