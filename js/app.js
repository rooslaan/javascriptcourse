const roles = ['user', 'admin', 'manager', 'admin'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);
const elIndex2 = roles.indexOf('superUser');
console.log(elIndex2);

if (roles.includes('admin')) {
    console.log('Доступ есть!');
}

console.log(roles.includes('admin'));

