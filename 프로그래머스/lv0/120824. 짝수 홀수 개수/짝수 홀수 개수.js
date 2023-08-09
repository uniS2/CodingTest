function solution(num_list) {
    let arr = [0, 0]
    num_list.forEach(item => {
        (item % 2) ? arr[1] += 1 : arr[0] += 1;
    });
    return arr;
}