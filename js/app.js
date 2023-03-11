const inMoney = 12000;
const yearPercent = 0.07;
const housePrice = 13500;
const year = 2;
const amountMonth = year * 12;

const finish = inMoney * (1 + yearPercent / 12) ** amountMonth;
if(finish>housePrice) {
    const result = `Покупка успешна))Мы накопили ${finish}$
    Остаток после покупки ${finish-housePrice}$`;
    console.log(result);
} else {
    const result = `Покупка не удалась((
    Мы накопили ${finish}$
    не хватает ${housePrice-finish}$`;
    console.log(result);
}
