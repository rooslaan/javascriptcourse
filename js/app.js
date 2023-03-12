/*
let balance = 100;
let bonusBalance = 90;
let isBanned = true;
let isExist = true;
let isSelling = true;

const a = balance >= 1000 && isBanned && isExist && isSelling;
const b = bonusBalance >= 100 && isBanned && isExist && isSelling;

if ((a === true) || (b === true)) {
    console.log('Покупка успешна!');
} else {
    console.log('Не достаточно средств!(');
}
*/
const balance = 1000;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance >= 1000) || (bonusBalance >= 100)
&& !isBanned && !isExist && isSelling;
console.log(`Могу купить игру: ${canBuy ? 'Да)' : 'Нет('}`)


