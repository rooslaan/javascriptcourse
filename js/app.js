const userNames = ['Vasya', 'Petya', 'Katya'];
console.log(userNames);
userNames[2] = 'Kris';
console.log(userNames);

userNames.push('Nick');
console.log(userNames);

const el = userNames.unshift('Max');
console.log(userNames);
console.log(el);

userNames.pop();
console.log(userNames);

userNames.shift();
console.log(userNames);
