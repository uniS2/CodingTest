function solution(a, d, included) {
    const arr = Array(included.length).fill(a).map((i, v) => i + d * v );
    const asw = arr.filter((_, v) => included[v]);
    return asw.reduce((a, c) =>  a + c , 0);
}