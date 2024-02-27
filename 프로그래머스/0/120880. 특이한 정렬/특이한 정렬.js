function solution(numlist, n) {
    let result = [];
    const arr = numlist.map(num => Math.abs(num - n));
    [...arr].sort((a, b) => a - b).forEach(i => {
        if((arr.indexOf(i) != arr.lastIndexOf(i))
           && (numlist[arr.indexOf(i)] < numlist[arr.lastIndexOf(i)])){
                result.push(numlist[arr.lastIndexOf(i)]);
                arr.splice(arr.lastIndexOf(i), 1, '');
        } else {
            result.push(numlist[arr.indexOf(i)]);
            arr.splice(arr.indexOf(i), 1, '');
        }
    });
    return result;
}