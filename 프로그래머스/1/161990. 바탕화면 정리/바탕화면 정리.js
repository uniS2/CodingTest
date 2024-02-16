function solution(wallpaper) {
    let x = [];
    let y = [];
    
    for(let i = 0; i < wallpaper.length; i++){
        if(wallpaper[i].includes('#')){
            x.push(i);
            y.push(wallpaper[i].indexOf('#'), wallpaper[i].lastIndexOf('#'));
        }
    }
    const lux = x[0];
    const rdx = x[x.length - 1] + 1;
    const luy = Math.min(...y);
    const rdy = Math.max(...y) + 1;
    
    return [lux, luy, rdx, rdy];
}