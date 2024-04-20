//continue

const min = 10;
const max = 30;
const divisor = 7;

// вивести числа з діапазона які кратні devisor

for (let number = min; number <=max; number++) {
    if (number % divisor) {
        continue;
    }
    console.log(number);
}

// let number = min;
// while (number <=max) {
//    if (number%divisor) {
//        number++;
//        continue;
//     } 
//     console.log(number);
//     number++;
// }