const userName = 'Vasya aka Terminator Pupkin';

const firstName = userName.slice(0, userName.indexOf(' '));
const secondName = userName.slice(userName.lastIndexOf(' '), userName.length);
console.log(firstName + secondName);