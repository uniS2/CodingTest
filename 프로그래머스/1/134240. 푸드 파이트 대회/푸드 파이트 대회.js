function solution(food) {
    let result = '';
    for(let key in food){
        result += String(key).repeat(Math.floor(food[key] / 2))
    }
    return result + 0 + [...result].reverse().join('')
}