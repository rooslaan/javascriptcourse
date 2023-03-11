const answr = prompt('Сколько будет 7 + или - 15?');

switch(true) {
    case Number(answr) === 22 :
    case Number(answr) === -8 :
    case answr === 'Я не робот' :
        console.log('Успех!');
        break;
    default:
        console.log('Вы робот!');
}
