function solution(myString) {
    return [...myString].map(m => m < 'l' ? 'l' : m).join('');
}