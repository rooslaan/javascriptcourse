const role1 = 'admin';
const role2 = 'user';
const role3 = 'superUser';

const roles = ['admin', 'user', 'superUser'];
const userInfo = ['Anna', 25];
console.log(roles);
console.log(roles[0]);
console.log(roles.length);
console.log(roles[roles.length - 1]);

console.log(roles.at(0));
console.log(roles.at(-1));

const usersAge = [2040 - 2022, 20 > 10 ? 1 : 2];
console.log(usersAge);

const userNames = new Array('Vasya', 'Petya', 'Katya');
console.log(userNames);

function square(el) {
    return el * el;
}

console.log(square([1, 2, 3]));