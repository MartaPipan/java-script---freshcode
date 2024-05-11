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


//Exercise1 Summa

const numb = 12321;
//1+2+3+2+1=9
//1. number = string
//2.method split
//3. reduce = summa

/** 
const numbStr = numb.toString();
const numbStr2 = String(numb);
//split
const arrNumberSymb = numbStr.split('');
console.log(arrNumberSymb);
//reduce
const summa = arrNumberSymb.reduce((accumulator, item) => accumulator + Number(item), 0);
//accumulator=summa from 0, if item is number = we have summa
console.log(summa);
*/

const sumDigitsOfNumber = (numb) => {
    const numberStr = number.toString();
    const arrNumber = numStr.split('');
    const summa = arrNumber.reduce((accumulator, item) => accumulator + Number(item), 0);
    return summa;
}


//const sumDigitsOfNumber = const sumDigitsOfNumber1 = const sumDigitsOfNumber2
const sumDigitsOfNumber1 = function (number = 0) {
    return number
        .toString()
        .split('')
        .reduce((sum, item) => sum + Number(item), 0);
}
console.log(sumDigitsOfNumber1(4329754400));
console.log(sumDigitsOfNumber1(1320023010));

/**
 * 
 * @param {number} number 
 * @returns {number} summa
 */
//const sumDigitsOfNumber = const sumDigitsOfNumber1
const sumDigitsOfNumber2 = (number = 111) => 
    number
        .toString()
        .split('')
        .reduce((sum, item) => sum + Number(item), 0);

console.log(sumDigitsOfNumber2(1023001));
console.log(sumDigitsOfNumber2(52301401));





//Exercise2. Date

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


//Exercise 3
/**
 * // привести весь рядок до нижнього регистру toLowerCase
// 'to be or not to be'
const strLowerCase = str.toLowerCase();
console.log(strLowerCase);
// отримати масив слів split
// ['to', 'be', 'or', 'not', 'to', 'be']
const words = strLowerCase.split(' ')
console.log(words);
//прибираємо усі порожні елементи
const wordsWithoutEmpty =  words.filter((word) => word);
// з кожного елементу масива отримати новий елемент    map
// де перша літера - велика, а всі інші - маленькі
// ['To', 'Be', 'Or', 'Not', 'To', 'Be']
const newWords = wordsWithoutEmpty.map((word) => {
  const firstLetterUpper = word.at(0).toUpperCase();
  const otherLetters = word.substring(1);
  const newWord = firstLetterUpper + otherLetters;
  return newWord;
});
console.log(newWords);
// зібрати масив в рядок   join
const strJadenCase = newWords.join(' ');
console.log(strJadenCase);
 */





const str5 = 'tO bE Or nOt tO be';
//Jaden Case = 'To Be Or Not To Be';
//1. string for lowercase;
//2. receber Array of words with split: ['to,' ', 'be', ' ', 'or', ' ', 'not',' ', 'to', ' ','be']
//3. delete spaces with method filter(return words)
//4.from Array of words do new Array(method map), + Jaden Case;
//5.converter Array for string again

//STEP1
const strLoverCase = str.toLowerCase();
const wordsCase = strLoverCase.split(' ');
const wordsWithOutEmpty = wordsCase.filter((word) => word);
console.log(wordsCase);
const newArrayWords = wordsWithOutEmpty.map((word) => {
    const firstLetterUpper = word.at(0).toUpperCase()
    const otherLetters = word.substring(1);//corte from index1
    const newArrayWords = firstLetterUpper + otherLetters;
    return newArrayWords;
})
console.log(newArrayWords);
const strJadenCase = newArrayWords.join(' ');
console.log(strJadenCase);

//STEP2.OPTIMIZATION
const toJadenCase = (str) => str
    .toLowerCase()
    .split()
    .filter((word) => word)
    .map((word) => word.at(0).toUpperCase() + word.substring(1))
    .join(' ');

console.log(toJadenCase(str));



//homework
//Task1
/**
 * 1) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які починаються на http://
*/
/**
 *    @param {Array}stringsHref
 *  * @returns {Array}filteredStrings
 */
const stringsHref = [
    "http://example.com",
    "https://openai.com",
    "ftp://website.com",
    "http://google.com",
    "https://stackoverflow.com",
    "http://github.com",
    "http://youtube.com",
    "https://wikipedia.org",
    "ftp://server.net",
    "http://facebook.com",
    "https://amazon.com",
    "http://twitter.com",
    "https://linkedin.com",
    "ftp://host.com",
    "http://reddit.com",
    "https://medium.com"
];
// exemple1
const filteredStrings = [];
for (let i = 0; i < stringsHref.length; i++) {
    const string = stringsHref[i];
    if (string.startsWith('http://')) {
        filteredStrings.push(string);
    }
}
console.log(filteredStrings);


//example2
function startsWithHttp(string) {
    return string.startsWith('http://');
}
const filteredStrings1 = stringsHref.filter(startsWithHttp);
console.log(filteredStrings1);

//===>2.1
const filteredStrings2 = stringsHref.filter(function (string) {
    return string.startsWith('http://');
});

//===>2.2
const filteredStrings3 = stringsHref.filter((string) =>
    string.startsWith('http://'));
console.log(filteredStrings3);

//Task2
/**
 * 2) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які закінчуються на .html
 */

/**
 *  @param {Array} fileNames
 *  @returns {Array} htmlFiles
 */
const fileNames = [
"index.html",
"styles.css",
"script.js",
"about.html",
"contact.html",
"home.html",
"blog-post-1.html",
"blog-post-2.html",
"services.html",
"portfolio.html",
"projects.html",
"gallery.html",
"faq.html",
"terms.html",
"privacy-policy.html"
];
 
const htmlFiles = fileNames.filter((fileName) => fileName.endsWith('.html'));
console.log(htmlFiles);


//Task3
/**
 * 3) Дан рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!'
 */
/**
 * @param {string} str11
 * @param {Array} words11
 * @param {Array}lineWithoutSpaces
 * @param {Array}newArrayWords1
 * @returns {string}newLine
 */
const str11 = 'abcde abcde abcde abcde';
const words11 = str11.split(' ');
console.log(words11);

const lineWithoutSpaces = words11.filter((word) => word);
const newWords1 = lineWithoutSpaces.map((word) => {
    const wordWithExclamation = '!' + word.substring(1);
    return wordWithExclamation; 
});
console.log(newWords1);

const newLine = newWords1.join(' '); 
console.log(newLine);


//3.1 =====>
const strLine = 'abcde abcde abcde abcde';
// Розділяємо рядок на слова за допомогою пробілу
const wordsLine = strLine.split(' ');
// Замінюємо перший символ кожного слова на '!'
const wordsNew = wordsLine.map((word) => '!' + word.slice(1));
// З'єднуємо слова знову разом із пробілами
const newStr = wordsNew.join(' ');
console.log(newStr);


//3.2 =====>
/** 
 * @param {string} str
 * @returns {string} strLin
 */
const newStra = (str) => str
    .split(' ')
    .map((word) => '!' + word.slice(1))
    .join(' ');

console.log(newStra(strLine));



//Exercise4
//4) Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому.
/**
 * 
 * @param {string} expression 
 * @param {symbol}vowels
 * @param {string}newExpression
 * @param {symbol}letter
 * @returns {number} count
 */
function countVowels(expression) {
    // Список голосних
    const vowels = ['a', 'o', 'i', 'e', 'u',];
    //рядок у нижнього регістру
    const newExpression = expression.toLowerCase();
    let count = 0;
    for (let i = 0; i < newExpression.length; i++) {
        // Перевіряємо кожен символ
        const letter = newExpression[i];
        //Якщо символ належить до голосних літер, збільшуємо лічильник
        if (vowels.includes(letter)) {
            count++;
        } 
    }
    // Повертаємо кількість голосних
    return count;
}
const expression = 'Believe you can and you are halfway there';
const vowelsCount = countVowels(expression);
console.log('The number of vowels equals: ' + vowelsCount);


// 4.1=====>
/**
 * 
 * @param {string} expression 
 * @param {array} vowels
 * @param {array} newExpression
 * @returns {number} count
 */
function countVowels1(expression) {
    const vowels = ['a', 'o', 'i', 'e', 'u'];
    const newExpression = expression.toLowerCase();
    const count = newExpression
        .split('')
        .reduce((acc, letter) => {
        if (vowels.includes(letter)) {
            acc++;
        }
        return acc;
    }, 0);
    return count;
}

// Task 5
//Створіть функцію, яка перевіряє, чи є рядок паліндромом.

//6) Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.

function isPalindrome(line) {
    const formattedLine = line.toLowerCase();
    const formattedArr = formattedLine.split(' ');
    const reversedLine = formattedArr.reverse();
    const formattedNewLineWithoutSpaces = reversedLine.join('');
    return formattedLine === formattedNewLineWithoutSpaces;

}

/**
function isPalindrome(str) {
    // Перетворюємо рядок в нижній регістр та видаляємо пробіли
    const formattedStr = str.toLowerCase().replace(/\s/g, '');
    // Перевертаємо рядок
    const reversedStr = formattedStr.split('').reverse().join('');
    // Порівнюємо рядок зі своїм оберненим варіантом
    return formattedStr === reversedStr;
}
*/

// Приклади перевірки
console.log(isPalindrome("A man a plan a canal Panama")); 
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
