const prices = [[100, 200], 
                [120, 100], 
                [200, 350]];


let pricesDifference = prices
    .map((price) => price[1] - price[0])
    .filter((price) => price > 0);

console.log(pricesDifference);