function solution(str1, str2) {
    return [...str1].map((s, i) => s + [...str2][i]).join('');
}