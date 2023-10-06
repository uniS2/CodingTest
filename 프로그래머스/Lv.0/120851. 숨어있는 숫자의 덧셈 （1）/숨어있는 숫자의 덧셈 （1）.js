function solution(my_string) {
    return [...my_string].filter(i => i > 0).reduce((a,b) => +a + +b, 0)
}