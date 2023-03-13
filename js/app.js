const age = 25;
const haveWork = false;
const moneyInUSD = 1500;

function canBuyMac(moneyInUSD1, age1, haveWork1) {
    switch(true){
        case moneyInUSD1 >= 2000:
            return true;
        case 2000 > moneyInUSD1 >= 1900:
            return credit_100_USD(age1);
        case 1900 > moneyInUSD1 >= 1500:
            return credit_500_USD(age1, haveWork1);
        case moneyInUSD1 < 1500:
            return false;  
    }
}
function credit_100_USD(age2) {
    if (age2 < 24) {
        return false;
    }
    return true;
}
function credit_500_USD(age3, haveWork3) {
    if (haveWork3 && age3 >= 24) {
        return true;
    }
    return false;
}
console.log(canBuyMac(moneyInUSD, age, haveWork));