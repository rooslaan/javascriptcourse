const operations = [100, -20, 7, -20, 50];
// const positivOperations = [];

// for (let operation of operations) {
//     if (operation > 0)
//     positivOperations.push(operation);
// }

// console.log(positivOperations);

const positivOperations = operations
    .filter((operation) => {
        return operation > 0;
    });
console.log(positivOperations);

const positivUAHOperations = operations
    .filter((operation) => {
        return operation > 0;
    })
    .map((operation) => operation * 40);
console.log(positivUAHOperations);
