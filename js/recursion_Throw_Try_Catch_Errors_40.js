//recursia

function recursion(number = 5) {
    if (number === 1) {
        return;
    }
    return recursion(number - 1);
}

console.log('code');

//(2 ** 5) = 2 * (2 ** 4)
//(2 ** 4) = 2 * (2 ** 3)
//(2 ** 3) = 2 * (2 ** 2)
//(2 ** 2) = 2 * (2 ** 1)
//(2 ** 1) = 2 * (2 ** 0)
//(2 ** 0) = 1
/**
 * 
 * @param {number} number 
 * @param {number} exp 
 * @returns {number} 
 */
function powRecursion(number = 2, exp = 2) {
    if (exp === 0) {
        return 1;
    }
    return number * powRecursion(number, exp - 1);
}
console.log(powRecursion(2, 6));

//4! = 4 * 3 * 2 * 1 = 4 * 3!
//3! = 3 * 2!
//2! = 2 *1!
//1!= 1
/**
 * 
 * @param {number} number 
 * @returns {number} 
 */
function factorialRecursion(number = 0) {
    if (number === 0 ||  number === 1) {
        return 1;
    }
    return number * factorialRecursion(number - 1);
}   
console.log(factorialRecursion(12));

/**
 * 
 * @param {bigint} number 
 * @returns {bigint}  
 */
function factorialRecursionBigInt(number = 0n) {
    if (typeof number !== 'bigint'){
        throw TypeError('number must be number')
    }
    if (number === 0n ||  number === 1n) {
        return 1n;
    }
    return number * factorialRecursionBigInt(number - 1n);
}   

try {
    console.log(factorialRecursionBigInt(24n)); 
} catch (error) {
    console.log(error);
}

//ERROR
/**
 * 
 * @param {number} number 
 * @returns {number}
 * @throws {TypeError} type must be number
 * @throws {Error} type must be integer
 * @throws {RangeError} number must be positive
 */
function factorRecursion(number = 0) {
    if (typeof number !== 'number'){
        throw new TypeError('number must be number');
    }
    if (Number.isInteger(number)=== false) {
        throw new Error('type must be integer');
    }
    if (number > 18 || number < 0 ) {
        throw new RangeError('number must be positive');
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorRecursion(number -1);
}
console.log(factorRecursion(11));

try {
   console.log(factorRecursion(11)); 
} catch (error) {
    console.log(error);
}
finally {
    console.info('finally after factorRecursion');
}

//METHODS BOOLEAN
//PRIMITIVE NUMBER
//12.245870965.toExponential ===>'1.2245870965e+1'<== string 
//12.245870965.toFixed(2)  ===> 12.24  <== 2 symbols next integer number
//12.245870965.toPrecision(5) ===> 12.245 <=== number with 5 symbols

//example
const booleanValue = false;

const booleanObj = new Boolean(false);
console.log(booleanObj);
console.log(typeof booleanObj.toString(), booleanObj.toString);
console.log(typeof booleanObj.valueOf(), booleanObj.valueOf);

if (booleanValue) {
   console.log('booleanValue =', booleanValue); 
}
if (booleanObj) {
    console.log('booleanObj=', booleanObj.valueOf());
} 
//const test1 = true.toString();
//const test2 = new Boolean(true).toString();
//const test3 = Boolean(());


//homework 
/**
 * Написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих чисел. (Алгоритм Евкліда)
https://vseosvita.ua/library/embed/001m1m-f727.docx.html
getDivider(45,15) ->15
getDivider(24,15) -> 3
getDivider(24,23) -> 1
Обов'язково кидатися помилками і ловити - обробляти виключення!!!
*написати таку ж функцію але без рекурсії, а з застосуванням циклу
 */

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function getDivider(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('number must be number');
    }
    if (num1 < 0 || num2 < 0) {
        throw new RangeError('Both arguments must be positive numbers');
    }
     if (num1 === 0) {
        return num2;
    }
    if (num2 === 0) {
        return num1;
    }
    return getDivider(num2, num1 % num2);
}

try {
    console.log(getDivider(45, 15)); // 15
    console.log(getDivider(24, 15)); // 3
    console.log(getDivider(24, 23)); // 1
} catch (error) {
    console.error(error);
}


/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function euclideanAlgorithm(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Numbers must be numbers');
    }
    if (num1 < 0 || num2 < 0) {
        throw new RangeError('Negative numbers are not allowed');
    }
    if (num1 === 0) {
        return num2;
    }
    if (num2 === 0) {
        return num1;
    }

    while (num1 !== num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }
    return num1;
}

try {
    console.log('Divider =', euclideanAlgorithm(45, 15)); // 15
    console.log('Divider =', euclideanAlgorithm(24, 15)); // 3
    console.log('Divider =', euclideanAlgorithm(24, 23)); // 1
    console.log('Divider =', euclideanAlgorithm(2, '...')); // 1
} catch (error) {
    console.error(error);
}