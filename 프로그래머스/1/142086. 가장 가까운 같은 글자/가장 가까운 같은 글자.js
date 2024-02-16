function solution(s) {
    return [...s].map((v, i) => {
        if(s.indexOf(v) === i) return -1;
        else return i - s.slice(0, i).lastIndexOf(v);
    })
}