const transactionInUSD = [10, -7, 50, -10, 100];
let transactionInUAH2 = transactionInUSD
    .map((transaction, i) =>  {
        console.log(i); //просто вывод индекса, как пример
        return transaction * 40
    });

console.log(transactionInUSD);
console.log(transactionInUAH2);

// const transactionInUAH = [];
// for (let transaction of transactionInUSD) {
//     transactionInUAH.push(transaction * 40);
// }

// console.log(transactionInUAH);