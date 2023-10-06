function solution(arr, divisor) {
    const arrAnw = arr.filter(item => !(item % divisor)).sort((a,b) => (a - b));
    return arrAnw.length ? arrAnw : [-1];
}