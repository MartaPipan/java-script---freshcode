'use strict'
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
// example1
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
 *
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
*/


//3.2 =====>
/** 
 * @param {string} str
 * @returns {string} strLin
 */
const strLine = 'abcde abcde abcde abcde';
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
/**function countVowels(expression) {
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
*/

// 4.1=====>
/**
 * 
 * @param {string} expression 
 * @param {array} vowels
 * @param {array} newExpression
 * @returns {number} count
 */
const vowels = ['a', 'o', 'i', 'e', 'u'];
function countVowels1(expression) {
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
const expression = 'Believe you can and you are halfway there';
const vowelsCount1 = countVowels1(expression);
console.log('The number of vowels equals: ', + countVowels1(expression));

// Task 5
//Створіть функцію, яка перевіряє, чи є рядок паліндромом.
/** 
 *  //1. Перетворюємо рядок в нижній регістр 
    const formattedStr = str.toLowerCase();
    //2. рядок ===> масив
    const formattedArr = formattedStr.split(' ');
    //3. видаляємо пробіли
    const lineArrWithoutEmpty = formattedArr.filter((element) => element);
    //4. рядок з newArrOfLine 
    const lineInString = lineArrWithoutEmply.join('');
    //5. Перевертаємо рядок
    const reversedLineInString = lineInString.split('').reverse().join('');
    //6. Порівнюємо рядок зі своїм оберненим варіантом
    return lineInString === reversedLineInString;

STEP 1
function isPalindrome(str) {
    const formattedStr = str.toLowerCase();
    const formattedArr = formattedStr.split(' ');
    const lineArrWithoutEmpty = formattedArr.filter((element) => element);
    const lineInString = line.ArrWithoutEmply.join('');
    const reversedLineInString = lineInString.split('').reverse().join('');

    return lineInString === reversedLineInString;
}
*/
function isPalindrome(str) {
    const lineInString = str.toLowerCase()
        .split(' ')
        .filter((element) => element)
        .join('');
    const reversedLineInString = lineInString.split('').reverse().join('');

    return lineInString === reversedLineInString;
}

console.log(isPalindrome('A man a plan a canal Panama')); 
console.log(isPalindrome('Hello world')); 
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 

//6) Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.
/**
 * 
 * @param {string} str 
 * @param {''} initialValue 
 * @param {array} words
 * @returns {string} word
 */
/**
 function longestWord(str, initialValue)
 1. const words = str.split(" "); ====> Розбиваємо рядок на масив слів за пробілами
 2. const longest = initialValue; ====> Змінна=найдовше слово
 3 . Проходимося по кожному слову в масиві
 for (let i = 0; i < words.length; i++) {
    const currentWord = words[i]; // Поточне слово
    4.  Якщо поточне слово довше за поточне найдовше слово, зберігаємо його
        if (currentWord.length > longest.length) {
            longest = currentWord;
    5.Повертаємо найдовше слово    return longest;
*/

function longestWord(str, initialValue) {
    const words = str.split(" ");
    let longest = initialValue; 
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longest.length) {
            longest = currentWord;
        }
    }
    return longest;
}

const sentence = `Об'єкт являє собою звичайний асоціативний масив`;
const initialValue = ""; // Початкове значення для longest
const longest = longestWord(sentence, initialValue);
console.log(longest); 