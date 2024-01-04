function solution(n) {
    let arr = Array(n).fill(0);
    let anw = arr.map(v => Array(n).fill(v));
    return anw.map((v, i) => {
        v[i] = 1;
        return v;
    })
}