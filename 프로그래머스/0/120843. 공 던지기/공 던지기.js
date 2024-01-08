function solution(numbers, k) {    
    if (numbers.length % 2) numbers.push(...numbers);
    
    const arr = numbers.filter((i, v) => !(v % 2));
    
    if (k % arr.length) return arr[k % arr.length - 1];
    else return arr[arr.length - 1];
}