function solution(code) {
    let mode = 0;
    let ret = '';
    
    [...code].forEach((v, i) => {
        if(v == 1) return mode = !mode;
        if(!mode && (i % 2 == 0)){
            ret += v;
        } else if (mode && (i % 2)) {
            ret += v;
        }
    })
    return ret ? ret : 'EMPTY';
}