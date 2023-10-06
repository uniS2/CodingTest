function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    const sum1 = arr1.reduce((a, b) => a + b, 0);
    const sum2 = arr2.reduce((a, b) => a + b, 0);
    
    return length1 > length2 ? 1 :
    length2 > length1 ? -1 :
    sum1 === sum2 ? 0 :
    sum1 > sum2 ? 1 : -1;
}