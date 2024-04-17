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
    if (typeof value1 === typeof value2 && value2 > value1) {
        return value1
    }
    return null;
} 
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

  if (number > 0) {
      return 'positive'
    } 
    if (number === 0) {
        return 'null'
    } 
    if (number < 0) {
        return 'negative'
    }
    if (number !== 'number' || Number.isNaN(number)) {
        return 'is not number'
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
