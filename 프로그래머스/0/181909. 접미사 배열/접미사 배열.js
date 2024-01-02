function solution(my_string) {
    return [...my_string].map((_, v) => my_string.slice(v)).sort()
}