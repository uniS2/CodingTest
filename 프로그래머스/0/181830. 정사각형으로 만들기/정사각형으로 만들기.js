function solution(arr) {
    if (arr.length > arr[1].length) {
        arr.forEach((v, i) => {
            while(arr.length != arr[i].length){
                v.push(0)
            }
        })
    } else if (arr.length < arr[1].length) {
        while(arr[1].length != arr.length){
            arr.push(Array(arr[1].length).fill(0))
        }
    }
    return arr;
}