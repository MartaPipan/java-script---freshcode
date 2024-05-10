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
console.log(factorialRecursionBigInt(24n));

//ERROR
function factorRecursion(number = 0) {
    if (typeof number !== 'number'){
        throw TypeError('number must be number')
    }
    if (number > 18 || number < 0 ) {
        throw new RangeError('number must be positive')
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorRecursion(number -1);
}
console.log(factorRecursion(11));