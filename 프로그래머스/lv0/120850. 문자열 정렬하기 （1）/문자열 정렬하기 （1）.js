function solution(my_string) {
    return [...my_string].filter(i => i >= 0).sort().map(i => +i)
}