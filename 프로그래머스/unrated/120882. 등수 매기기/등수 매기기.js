function solution(score) {
    const arr = score.map(([a, b]) => (a + b) / 2);
    const arr_sort = [...arr].sort((a, b) => b - a);

    return arr.map(i => arr_sort.findIndex(a => a === i) + 1);
}