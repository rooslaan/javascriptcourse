const operations = [100, -20, 7, -30, 50];
let balanse = 0;

for (let operation of operations) {
    balanse += operation;
}
console.log(balanse);

const finalBalanse =  operations.reduce((acc, value) => {
    return acc += value;
}, 0); 

// 0 - acc = 0, value = 100
// 1 - acc = 100, value = -20
// 2 - acc = 80, value = 7
// 3 - acc = 87, value = -30
// 4 - acc = 57, value = 50
// 5 - acc = 107

const minElement =  operations.reduce((acc, value) => {
    if (value > acc) {
        return acc;
    } else {
        return value;
    }
}, 0); 
console.log(minElement);

