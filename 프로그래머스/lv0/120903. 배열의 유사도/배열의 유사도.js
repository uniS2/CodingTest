function solution(s1, s2) {
    const init = s2.length;
    s1.forEach(i => {
        s2 = s2.filter(v => (v !== i))
    })
    return init - s2.length;
}