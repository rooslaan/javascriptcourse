const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKm(distance) {
    return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
    const price = calculateKm(distance) + calculateW(present1) + calculateW(present2);
    return price;
} 

console.log(getExchangePrice(1, 2, 10));