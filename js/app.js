for (let i = 1; i < 5; i++) {
    console.log(`Вывод - ${i}`);
}


let i = 1;
while (i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}

const srr = [1, 4, 8, 7,];

for (let i = 0; i < srr.length; i++) {
    if (srr[i] > 5) {
        break;
    }
    console.log(srr[i]);  
}


while (srr[i] <= 5 && srr.length) {
    console.log(srr[i]);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while(j < 0)