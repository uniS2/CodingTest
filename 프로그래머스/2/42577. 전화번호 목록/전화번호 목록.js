function solution(phone_book) {
    let hashMap = new Map();
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length; i++) {
        hashMap.set(i, phone_book[i]);
    }
    
    for(let [book, phone] of hashMap) {
        const next = hashMap.get(book + 1);
        if (!next) return true;
        else if (next.indexOf(phone) === 0) return false;
    }
}