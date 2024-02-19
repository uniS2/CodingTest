function solution(picture, k) {
    return picture.map(pic => Array(k).fill([...pic].map(s => s.repeat(k)).join(''))).flat();
}