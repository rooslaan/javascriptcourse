const operations = [1000, -700, 300, -500, 10000];

let balance = 100;
let expenses = [];
let incomes = [];
let j = 1;
let sum = 0; 
let sum1 = 0; 

for (let i = 0; i < operations.length; i++) {
    if(operations[i] > 0) {
        incomes.push(operations[i]);
    } else {
        expenses.push(operations[i]);
    }
    balance = balance + operations[i];
    
    if (balance < 0) {
        console.log(`Баланс был отрицательный ${j} раз`);
        j++;
    }
}
console.log(`Итоговый баланс ${balance}$`);

function averageValueIncomes(money) {
    for (let i = 0; i < money.length; i++) {
        sum += Math. abs(money[i]);
    }
    return sum / money.length;
}
function averageValueExpenses(money) {
    for (let i = 0; i < money.length; i++) {
        sum1 += Math. abs(money[i]);
    }
    return sum1 / money.length;
}

console.log(`Средний доход ${averageValueIncomes(incomes)}$`);
console.log(`Средний расход ${averageValueExpenses(expenses)}$`);
    