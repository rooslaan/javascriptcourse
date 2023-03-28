const arr = [1, 4, 4, 10];

const averageValue = arr.reduce((acc, value) => {
    return acc += value / arr.length;
}, 0);
console.log(averageValue);
