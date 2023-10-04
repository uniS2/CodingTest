function solution(num_list, n) {
    // 사용하지 않는 변수 처리
    return num_list.filter((_, v) => !(v % n));
}