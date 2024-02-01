function solution(l, r) {
    const arr = Array(r - l + 1).fill(l).map((v, i) => v + i);
    const result = arr.filter(i => !String(i).replaceAll(/[0,5]/g, ''));
    return result.length ? result : [-1];
}