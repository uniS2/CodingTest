function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const second_last = num_list[num_list.length - 2];
    num_list.push(last > second_last ? last - second_last :  last * 2);
    return num_list;
}