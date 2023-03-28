const arr = [2, 4, 4, 10];

// let findEl;
// for (let el of arr) {
//     if (el > 5) {
//         findEl = el;
//         break;
//     }
// }
// console.log(findEl);

const findEl = arr.find(el => el > 5);
console.log(findEl);

const findIndexOfEl = arr.findIndex(el => el < 0);
console.log(findIndexOfEl);



