function solution(num_list, n) {
    return num_list.filter((i, v) => !(v % n));
}