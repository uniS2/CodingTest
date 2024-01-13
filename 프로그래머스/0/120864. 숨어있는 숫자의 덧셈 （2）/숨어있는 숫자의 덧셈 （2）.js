function solution(my_string) {
    return my_string.split(/[A-Z, a-z]/g).reduce((a, b) => +a + +b, 0)
}