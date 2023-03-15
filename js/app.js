const url = 'https://purpleschool.ru/course/javascript';
/*
const res = url.split('/');
let res1 = res[0].split(':');
console.log('Протокол - ' + res1[0]);
console.log('Доменное имя - ' + res[2]);
let res2 = res.splice(3, 2);
console.log('Путь внутри сайта - ' + res2.join('/'));*/

function getUrlData(url) {
    const [protocol, _, hostName, ...path] = url.split('/');
    if (protocol === 'https' || protocol === 'http') {
        if (!hostName.includes('.')) {
            return;
        }
        console.log([protocol, _, hostName, path]);
        console.log('Протокол - ' + protocol.split(':')[0]);
        console.log('Доменное имя - ' + hostName);
        console.log('Путь внутри сайта - /' + path.join('/'));
    }
    
}

getUrlData(url);