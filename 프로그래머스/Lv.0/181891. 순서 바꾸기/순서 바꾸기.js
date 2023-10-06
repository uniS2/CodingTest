function solution(num_list, n) {
    const arr_after = num_list.slice(n);
    const arr_before = num_list.slice(0, n);
    return arr_after.concat(arr_before);
}