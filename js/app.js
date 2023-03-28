const users = ['Vasya', 'Masha', 'Katya', 'Anya'];
console.log(users);
users.sort();
console.log(users);

const operations = [100, -300, -100, 50, 480];
console.log(operations);

// < 0 - a, b - сохраняем порядок
// > 0 - b, a - меняем порядок
operations.sort((a, b) => a - b);
console.log(operations);


// < 0 - a, b - меняем порядок
// > 0 - b, a - сохраняем порядок
operations.sort((a, b) => -a + b);
console.log(operations);