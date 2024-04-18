/**
* Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - *"negative"
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

// /** Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання (num1-num2), інакше - вивести результат множення (num1*num2)
// */
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

/** Якщо значення змінної кратно(тобто ділиться без остачі) на 7 і одночасно кратно 3 - виводимо "you win!", інакше - "you loose"
* @param {number} number. 
* @returns - string.
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


/**
 *  Написати функцію, яка приймає два значеня і повертає більше значення, якщо значення одного типу, в усіх інших випадках повертає null
 * @param {any} value1 
 * @param {any} value2 
 * @returns - any
 */

function exchangeSameType(value1, value2) {
    if (typeof value1 === typeof value2 && value1 > value2) {
        return value1
    }
    else if (typeof value1 === typeof value2 && value2 > value1) {
        return value2
    }
    return null;
} 

/**
 * function exchangeSameType(value1, value2) {
    if (typeof value1 === typeof value2)
    if (value1 > value2) {
        return value1
    }
    if (value2 > value1) {
        return value2
    }
    return null;
 */
let exchangeResult1 = exchangeSameType(10, 7);
console.log(exchangeResult1);

let exchangeResult2 = exchangeSameType(9, 'What it is?');
console.log(exchangeResult2);

let exchangeResult3 = exchangeSameType('I love Ukraine!', 'What you do?');
console.log(exchangeResult3);

/**
 * Написати функцію, яка просить користувача ввести число і виводить повідомлення яке він число ввів: "додатнє", "нуль" або "від'ємне", або виводить повідомлення "це не число"
 * @param {number} number
 * @returns - string 
 */

function writeUserNumber(number) {
    if (typeof number !== 'number' || Number.isNaN(number)) {
        return 'is not number'
    }
    if (number > 0) {
      return 'positive'
    } 
    if (number === 0) {
        return 'null'
    } 
    if (number < 0) {
        return 'negative'
    }
}
let writeResult1 = writeUserNumber(83);
console.log(writeResult1);
let writeResult2 = writeUserNumber(-3);
console.log(writeResult2);
let writeResult3 = writeUserNumber(0);
console.log(writeResult3);
let writeResult4 = writeUserNumber('qwerty');
console.log(writeResult4);
let writeResult5 = writeUserNumber('two');
console.log(writeResult5);
let writeResult6 = writeUserNumber(NaN);
console.log(writeResult6);


/**
 * Написати функцію, яка приймає параметром число і перевіряє чи є це число дільником 100. Повертає булеве значення.
 * @param {number} numberToCheck 
 * @returns - boolean
 */

function isDivisorOfNumber(numberToCheck) {
    let dividend = 100;
    let divisorResult = 100 % numberToCheck;
    if (divisorResult === 0) {
        return true
    }
    return false
}

let isDivisorResult1 = isDivisorOfNumber(7);
console.log(isDivisorResult1);
let isDivisorResult2 = isDivisorOfNumber(2);
console.log(isDivisorResult2);
let isDivisorResult3 = isDivisorOfNumber(100);
console.log(isDivisorResult3);

/**
 * Написати функцію, яка перевіряє можливість існування трикутника.
*Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення *за замовчуванням 3,4,5.
*Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін *більша за третю.
*@param {number} sideA
*@param {number} sideB
*@param {number} sideC
*@returns - boolean (true ou false)
 */

function isTrianglePossible(sideA = 3, sideB = 4, sideC = 5) {
    if ((sideA+sideB>sideC) && (sideA+sideC>sideB) && (sideB+sideC>sideA)) {
    return true    
    }
    return false
}
let checkTriangleExist1 = isTrianglePossible(3, 4, 5);
console.log(checkTriangleExist1);
let checkTriangleExist2 = isTrianglePossible(7, 3, 9);
console.log(checkTriangleExist1);
let checkTriangleExist3 = isTrianglePossible(2, 6, 8);
console.log(checkTriangleExist3);
