function solution(polynomial) {
    polynomial = polynomial.split(' + ');
    let x = polynomial.filter(str => str.includes('x'));
    let int = polynomial.filter(num => Number(num) > 0);
    
    x = x.length ? x.reduce((acc, cur) => {
        if (cur == 'x') return acc + 1;
        else return acc + Number(cur.replace('x', ''))
        }, 0) : 0;
    int = int.length ? int.reduce((acc, cur) => acc + Number(cur), 0) : 0;
    
    if (x == 0) return `${int}`;
    else if (x == 1) x = 'x';
    else x = `${x}x`;
    
    if (int) return `${x} + ${int}`;
    else if (!int) return x;
}