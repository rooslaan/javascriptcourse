const bmwX3 = 100000;
const fordFocusPrice = 10000;
const money = 20000;
let message;

if (money > bmwX3) {
    message = 'BMW';
} else {
    message = 'Велосипед';
}

console.log(`Я хочу купить ${money > bmwX3 ? 'BMW' : money > fordFocusPrice ? 'Ford Focus' : 'Велосипед'}`); 