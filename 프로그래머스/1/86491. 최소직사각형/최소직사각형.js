function solution(sizes) {
    let result = [0, 0];
    sizes = sizes.map(s => s.sort((a, b) => a - b));
    sizes.forEach(([w, h]) => {
        if (result[0] < w) result[0] = w;
        if (result[1] < h) result[1] = h;
    })
    return result[0] * result[1];
}