function solution(a, b) {
    const plus = String(a) + String(b)
    const multi = 2 * a * b;
    return plus < multi ? multi : +plus; 
}