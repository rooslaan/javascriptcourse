const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

function addEl(tasks, nameTask) {
    tasks.push(nameTask);
    return tasks;
}

function deleteEl(tasks, nameTask) {
    if (tasks.indexOf(nameTask) >= 0) {
        tasks.indexOf(nameTask);
        tasks.splice(tasks.indexOf(nameTask), 1);
        return tasks;
    }
    return 'Такого элемента нет!';
}

 function swapEl(tasks, nameTask) {
    if (tasks.indexOf(nameTask) >= 0) {
        tasks.splice(tasks.indexOf(nameTask), 1);
        tasks.unshift(nameTask);
        return tasks
    }
    return 'Такого элемента нет!';
 }
 console.log(deleteEl(tasks, 'Задача 4'));