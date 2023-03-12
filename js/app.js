console.log('вася' || 'олег');
console.log(false || 'олег');

console.log('вася' && 'олег');
console.log(false && 'олег');

let a = 'max';
const userName = a || 'петя';
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4'
console.log(fileName);