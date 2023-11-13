function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    const [one, two, three] = dots;
    return Math.abs((one[0] - three[0]) * (one[1] - two[1]));
}