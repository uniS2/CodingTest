function solution(intStrs, k, s, l) {
    return intStrs.map(n => +n.slice(s, s + l)).filter(n => n > k);
}