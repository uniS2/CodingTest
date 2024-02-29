const now = new Date();
const year = now.getUTCFullYear();
const month = now.getUTCMonth() < 9 ? `0${now.getUTCMonth() + 1}` : now.getUTCMonth() + 1;
const date = now.getUTCDate() < 10 ? `0${now.getUTCDate()}` : now.getUTCDate();

console.log(`${year}-${month}-${date}`);