function solution(n, control) {
    [...control].forEach(item => {
       n += (item === 'w') ? 1 :
            (item === 's') ? -1 :
            (item === 'd') ? 10 : -10;
    })
    return n;
}