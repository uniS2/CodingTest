function solution(arr) {
    return arr.map(i => {
        return (i >= 50) && !(i % 2) ? i / 2
        : (i < 50) && (i % 2) ? i * 2 : i;
    });
}