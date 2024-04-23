function solution(a, b, n) {
    let result = 0;
    while(n >= a) {
        result += change(n, a, b);
        n = change(n, a, b) + n % a;
    }
    return result;
}

function change(n, a, b) {
    return Math.trunc(n / a) * b;
}