function solution(my_string) {
    const str = [...my_string].map(i => {
        return (i.toUpperCase() === i) ? i.toLowerCase() : i.toUpperCase();
    })
    return str.join('');
}