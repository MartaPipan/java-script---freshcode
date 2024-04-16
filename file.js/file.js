// написати функцію, яка приймає число - сторону квадрата (значення за замовчуванням = 1) і повертає периметр
//перевірити зі значеннями -5 0 1.3 8
// написати функцію, яка приймає два числа і повертає максимальне, якщо числа однакові - повертає будь яке

console.log('написати функцію, яка приймає два числа і повертає максимальне, якщо числа однакові - повертає будь яке');

//const name = function (){}
//function name (){}

/**
 * функцію, яка приймає число - сторону квадрата (значення за замовчуванням = 1) і повертає периметр
 * @param {number} side defaultValue = 1
 * @returns {number} for side <=0 return NaN
 * функцію, яка приймає два числа і повертає максимальне, якщо числа однакові - повертає будь яке
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
const getPerimetrSquare = function (side = 1) {
    //перевірити сторону щоб вона була більше 0
    //якщо че так - обчислити периметр і повернути
    //якщо ні - повернути NaN
    if (side > 0) {
        return 4 * side;
        function getMaxFromTwoNumbers(number1, number2) {
            if (number1 > number2) {
                return number1;
            }
            return NaN;
        };

        const userInput = -7;
        const perimetr = getPerimetrSquare(userInput); //NaN
        if (Number.isNaN(perimetr)) {
            console.log('error, return');
        } else {
            //додаткові обчислення
            console.log('result = ', perimetr);
        }
        return number2;
    }
}