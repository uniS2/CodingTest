function solution(s) {
    const arr = s.split(' ');
    return arr.reduce((acc, cur, i) => (cur == "Z") ? +acc - (arr[i - 1]) : +acc + +cur, 0)
}