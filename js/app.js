const projectName = 'Caйт магазина';
const price = 2000;
const author = 'Василий П.П.'


const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

const template2= `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = 'Проэкт \n' + 'цена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);