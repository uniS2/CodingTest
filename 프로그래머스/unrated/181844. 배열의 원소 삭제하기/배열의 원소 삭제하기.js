function solution(arr, delete_list) {
    return arr.filter(a => !delete_list.find(i => a === i));
}