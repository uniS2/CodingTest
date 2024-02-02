function solution(spell, dic) {
    dic = dic.map(d => [...d].sort().join('')).filter(d => d == spell.sort().join(''));
    return dic.length ? 1 : 2;
}