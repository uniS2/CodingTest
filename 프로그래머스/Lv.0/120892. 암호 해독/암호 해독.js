function solution(cipher, code) {
    return [...cipher].filter((_,v) => !((v + 1) % code)).join('');
}