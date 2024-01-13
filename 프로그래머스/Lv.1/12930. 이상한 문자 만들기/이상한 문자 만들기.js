function solution(s) {
    return s.split(' ')
        .map(s => [...s].reduce((a, b, i) => a + ((i % 2) ? b.toLowerCase() : b.toUpperCase()), '')).join(' ');
}