'use strict'
//NUMBER

const number = 12;

const objNumber = new Number(12);
console.log(objNumber);
console.log(objNumber.valueOf);

/**number
 * constructor:
 * 
 * toExponential
 * toFixed
 * toLocalString
 * toPrecision
 * toString
 * valueOf
 * _defineGetter_
 * _defineSetter_
 * _lookupGetter_
 * _lookupSetter_
 * _proto_
 * hasOwnProperty
 * isPrototypeOf
 * propertyIsEnumerable
 */

// toExponential
const number1 = 12345;// =  1,2345*10⁴   =  /em console 1.2345e+4  
console.log(number1.toExponential());

// toFixed
console.log(number1.toFixed(2)); //  =12345.00
console.log(number1.toFixed(4)); // =12345.0000

//Bigint ____grande inteiro numero
const Bigint = 123123123n;
console.log(Bigint);   //  =123123123n
console.log(BigInt.toString()); //   = 123123123
console.log(BigInt.toLocaleString()); //  = 123,123,123

// STRING method exemple:
'hello'.toUpperCase()    //----method.toUpperCase----- result='HELLO';
let num2 = 'Hi Maria,how are you?';
console.log(num2.toUpperCase()); //result:   HI MARIA, HOW ARE YOU?
console.log(num2.toLowerCase()); //result:   hi maria, how are you?
'Hello my dear friend'.split() // method.split()------result: ['Hello my dear friend']------result:
// (20)['H', 'e', 'l', 'l', 'o', 'm', 'y', 'd', 'e', 'a', 'r', 'f', 'r', 'i', 'e', 'n', 'd']
 
'Hello my dear friend'.split('') //----('') - escolha todas palavras:
// (4) ['Hello', 'my', 'dear', 'friend']
//NUMBER method example:
let num3 = 67.78990;
let num4 = null;
console.log(num3.toFixed); //result num3 = 68;
console.log(num3 - num4);  //result 67.78990 - 0 = 67.78990;

//STRING
//string.prototype.locateCompare
//string.prototype.padEnd()
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(50, '.'));
// Expected output: "Breaded Mushrooms........"

console.log(str1.padStart(3, '.'));
// Expected output: "...Breaded Mushrooms"

console.log(str1.repeat(3));
// Expected output: Breaded Mushrooms Breaded Mushrooms Breaded Mushrooms

console.log(str1.replace('Mushrooms', 'Booms'));
// Expected output: "Breaded Booms"
//str1 = str1.replace('Mushrooms', 'Booms')); ======new str1 safe

//Метод replace()значень Stringповертає новий рядок із одним, деякими або всіма збігами, заміненими patternна replacement. 
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"


//srring.prototype.slice()
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."
//Метод slice()значень String витягує частину цього рядка та повертає його як новий рядок, не змінюючи оригінальний рядок.


//String.prototype.split
//Метод split()значень Stringприймає шаблон і ділить цей рядок на впорядкований список підрядків шляхом пошуку шаблону, поміщає ці підрядки в масив і повертає масив.const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);
console.log(splits); // [ "Hello", "World.", "How" ]

const splits1 = myString.split(''); 
console.log(splits); // [ 'H','e','l','l','o','W','o','r','l','d',......... ]



//Метод startsWith()значень String визначає, чи починається цей рядок із символів зазначеного рядка, повертаючи trueабо falseвідповідно.
const str2 = 'Saturday night plans';

console.log(str2.startsWith('Sat'));
// Expected output: true

console.log(str2.startsWith('Sat', 3));
// Expected output: false


//Метод substring()
//повертає частину цього рядка від початкового індексу до кінцевого індексу та за винятком нього або до кінця рядка, якщо кінцевий індекс не надано.
const str4 = 'Mozilla';

console.log(str4.substring(1, 3));
// Expected output: "oz"

console.log(str4.substring(2));
// Expected output: "zilla"



//Метод trim()values String​
//​видаляє пробіли з обох кінців цього рядка та повертає новий рядок, не змінюючи оригінальний рядок.

//Щоб повернути новий рядок із обрізаним пробілом лише з одного кінця, використовуйте trimStart()або trimEnd().
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

const numb = 12321;
//1+2+3+2+1=9
//1. number = string
//2.method split
//3. reduce = summa

//
const numbStr = numb.toString();
const numbStr2 = String(numb);
//split
const arrNumberSymb = numbStr.split('');
console.log(arrNumberSymb);
//reduce
const summa = arrNumberSymb.reduce((accumulator, item) => accumulator + Number(item), 0);
//accumulator=summa from 0, if item is number = we have summa
console.log(summa);
//expected 9

const sumDigitsOfNumber = (numb) => {
    const numberStr = number.toString();
    const arrNumberSymb = numbStr.split('');
    const summa = arrNumberSymb.reduce((accumulator, item) => accumulator + Number(item), 0);
    return summa;
}
//const sumDigitsOfNumber = const sumDigitsOfNumber1

const sumDigitsOfNumber1 = (number = 111) => 
    number
        .toString()
        .split('')
        .reduce((sum, item) => sum + Number(item), 0);

console.log(sumDigitsOfNumber1(1023001));
console.log(sumDigitsOfNumber1(52301401));

//const sumDigitsOfNumber = const sumDigitsOfNumber1 = const sumDigitsOfNumber2

const sumDigitsOfNumber2 = function (number = 0) {
    return number
        .toString()
        .split('')
        .reduce((sum, item) => sum + Number(item), 0);
}
console.log(sumDigitsOfNumber2(4329754400));
console.log(sumDigitsOfNumber2(1320023010));


// how many years now if birthday 2000-03-12?
const dataBDUser = '12/03/2000';
const arrDataBDUser = dataBDUser.split('/');
console.log(arrDataBDUser.at(-1));

const yearBDUser = arrDataBDUser.at(-1);
// in javaScript exist object Date; where we have Date.now (Date.now starting in 1970-01-01)

const now = new Date();
const currentYear = now.getFullYear()
console.log(now.getFullYear); //information of date today, now, in this moment
console.dir(now); //object in console


console.log(now.getFullYear());
console.dir(now);

const age = now.getFullYear() - Number(dataBDUser.split('/').at(-1)); // -1  = last element = 2000
console.dir(age);