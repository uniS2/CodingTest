function solution(str_list) {    
    const indexL = str_list.indexOf("l");
    const indexR = str_list.indexOf("r");
    
    if (indexL < 0 && indexR < 0) return [];
    if (indexL < 0) return str_list.slice(indexR + 1);
    if (indexR < 0) return str_list.slice(0, indexL);
    
    if (indexL < indexR) return str_list.slice(0, indexL)
    else  return str_list.slice(indexR + 1);
}