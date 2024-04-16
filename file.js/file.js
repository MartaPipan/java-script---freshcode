//написати функцію яка рахує суму двох чисел які ввів користувач
/**
 * return true, if value is null | '' | NaN
 * @param {any} value 
 * @returns boolean
 */
const checkUserInputError = function (value) {
  return value === null || value === '' || Number.isNaN(Number(value));
};
/**
 * calc and return summa two numbers
 * @param {number} number1 
 * @param {number} number2 
 * @returns number
 */
const getSumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};
// написати функцію, яка приймає число - сторону квадрата (значення за замовчуванням = 1) і повертає периметр
//перевірити зі значеннями -5 0 1.3 8

/**
 * 
 * @param {*} value1 defaultValue = 2
 * @param {*} value2 defaultValue = 3
 * @returns undefined
 * функцію, яка приймає число - сторону квадрата (значення за замовчуванням = 1) і повертає периметр
 * @param {number} side defaultValue = 1
 * @returns {number} for side <=0 return NaN
 */
const logResult = function (value1 = 2, value2 = 3) {
    if (checkUserInputError(value1) || checkUserInputError(value2)) {
        console.log('error');
        return;
    }
    console.log(value1, ' + ', value2, ' = ',
        getSumTwoNumbers(Number(value1), Number(value2))
    );
    const getPerimetrSquare = function (side = 1) {
        //перевірити сторону щоб вона була більше 0
        //якщо че так - обчислити периметр і повернути
        //якщо ні - повернути NaN
        if (side > 0) {
            return 4 * side;
        }
        return NaN;
    };
    //debugger
    // logResult(prompt('enter number', 2), prompt('enter number', 3));
    logResult();

    const userInput = -7;
    const perimetr = getPerimetrSquare(userInput); //NaN
    if (Number.isNaN(perimetr)) {
        console.log('error, return');
    } else {
        //додаткові обчислення
        console.log('result = ', perimetr);
    }
}