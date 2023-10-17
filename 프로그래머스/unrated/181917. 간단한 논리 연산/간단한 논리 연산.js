function solution(x1, x2, x3, x4) {
    const res1 = x1 === false && x2 === false ? false : true;
    const res2 = x3 === false && x4 === false ? false : true;
    return res1 === false || res2 === false ? false : true;
}