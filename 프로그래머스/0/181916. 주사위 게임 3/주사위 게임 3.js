function solution(a, b, c, d) {
    let dice = {};
    [a, b, c, d].forEach(value => !dice[value] ? dice[value] = 1 : dice[value]++);
    dice = Object.entries(dice)
        .sort((a, b) => b[1] - a[1] || Number(a[0]) - Number(b[0]))
        .map(value => value.map(Number));
    
    if (dice.length === 1) return dice[0][0] * 1111;
    else if (dice.length === 2 && dice[0][1] === 3) return (10 * dice[0][0] + dice[1][0]) ** 2;
    else if (dice.length === 2) return (dice[0][0] + dice[1][0]) * Math.abs(dice[0][0] - dice[1][0]);
    else if (dice.length === 3) return dice[1][0] * dice[2][0];
    else return dice[0][0];
}