/**
 * Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative"
 * @param {number} number - number for checking.
 */
function checkNumber(number) {
    if (number>=0) {
        console.log('positive');
    } else {
        console.log('negative');
    }
}
checkNumber(5);
checkNumber(-3);

let number = 10; //number for checking
if (number >= 0) {
    console.log('positive');
} else {
    console.log('negative');
    } 

/** Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання (num1-num2), інакше - вивести результат множення (num1*num2)
*/
let number1 = 5;
let number2 = 3;
let sum = number1 + number2;
let multiplication = number1 * number2;
if (number1>number2) {
    console.log(sum); 
} else {
    console.log(multiplication);
}

/** 
 * @param {number} num1.
 * @param {number} num2.
 * @return {number} -calculate result.
*/
function calculateResult(num1, num2) {
    if (num1>num2) {
        return num1 - num2;
    }
    return num1 * num2;
}
let result1=calculateResult(8, 15);
console.log('result1:', result1);
let result2=calculateResult(18, 5);
console.log('result2:', result2);

/**
 * Якщо значення змінної кратно(тобто ділиться без остачі) на 7 і одночасно кратно 3 - виводимо "you win!", інакше - "you loose"
 */

let winOrLooseNumber = 21;
let divisor1 = 7;
let divisor2 = 3;
if (winOrLooseNumber % divisor1 === 0 && winOrLooseNumber % divisor2 === 0) {
    console.log("you win!");  
} else {
console.log("you loose");
}
/**
 * Якщо значення змінної кратно(тобто ділиться без остачі) на 7 і одночасно кратно 3 - виводимо "you win!", інакше - "you loose"
 * @param {number} number. 
 * @returns string.
 */
function checkResult(number) {
    let divisor1 = 7;
    let divisor2 = 3;
    if (number % divisor1 === 0 && number % divisor2 === 0) {
        return "you win!";
   }
    return "you loose";
} 
let myResult1 = checkResult(63);
console.log(myResult1);
let myResult2 = checkResult(37);
console.log(myResult2);
