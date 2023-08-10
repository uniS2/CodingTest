function solution(dot) {
    switch(dot.filter(x => x < 0).length){
            case(0): return 1;
            case(1): return (dot[0] < 0) ? 2 : 4;
            case(2): return 3;
    }
}