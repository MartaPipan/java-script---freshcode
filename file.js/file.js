/**
 * pryklady pidnesennia do stepeni
 */
let number1 = 1;
let number2 = 4;
//number1 = number1 + number2;
number1 += number2;

console.log('prefix increment =', ++number1);
console.log('number2 =', number2++);
console.log('number2 =', number2);

const base1 = 2;
const pow1 = 3;
const result1 = base1 ** pow1;
console.log('result1', result1);
//number1 = number1 / 3;
number1 /= 3;

const base2 = 2;
const pow2 = -3;
const result2 = base2 ** pow2;
console.log('result2', result2);

const base3 = 2;
const pow3 = 3;
const result3 = (-base3) ** pow3;
console.log('result3', result3);
//number1 = number1 * number2;
number1 *= number2;

//number1 = number1 ** 2;
number1 **= 2;

//number1 = number1 % 5
number1 %= 5;

//number1 = number1 - 1;
number1--;

number1 = (number1 + 2) * 3 + number1;


