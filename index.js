/**Написати код, який пропонує користувачу вгадати таємниче число. Кількість спроб необмежена!
*Таємниче число створюєте самі і записуєте в константу.  const SECRET_NUMBER = 7;
*Користувач вводить число, ви залежно від того, що ввів користувач пишете:
*- таємне число більше            (userNumber = 3)
*- таємне число менше             (userNumber = 30)
*- ви ввели не число              (userNumber = null)
*- вітаю, ви вгадали за .. (кількість) спроб     (userNumber = 7)

 * @param {number} SECRET_NUMBER
 * @param {Number} userInputNumber
 * @param {number} countTry
 * @returns {string}
 */
const SECRET_NUMBER = 7;
let countTry = 0;

while (true) {
    const userNumber = prompt('Enter your number');
    const userInputNumber = Number(userNumber); // Convert the string to a number
    if (Number.isNaN(userInputNumber) || userInputNumber === null) {
        console.log('You entered a non-number');
    }
    countTry++;

    if (userInputNumber < SECRET_NUMBER) {
        console.log('Secret number is greater');
    }
    if (userInputNumber > SECRET_NUMBER) {
        console.log('Secret number is less');
    }
    if (userInputNumber === SECRET_NUMBER) {
        console.log('Congratulations, you guessed it in ' + countTry + ' attempts!');
        break;
    }
}

// Написати скрипт, який виводить парні і кратні 9 числа з діапазону від 0 до 100 в зворотньому порядку
const min = 0;
const max = 100;
const divisor = 9;

for (let i = max; i >= min; i -=2) {
    if (i % divisor === 0) {
        console.log(i);
    }
}

