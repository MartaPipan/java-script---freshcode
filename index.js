// /**
//  * @param {number} SECRET_NUMBER
//  * @param {number} userInputNumber
//  * @param {number} countTry
//  * @returns{string}
//  */
// const SECRET_NUMBER = 7;
// let countTry = 1;
// while (true) {
//     const userInputNumber = prompt('Enter your number');
//     if (userInputNumber === null) {
//         console.log('You entered a non-number');
//     }
//     if (userInputNumber < SECRET_NUMBER) {
//         console.log('Secret number is greater');
//     }
//     if (userInputNumber > SECRET_NUMBER) {
//         console.log('Secret number is less');
//     }
//     if (userInputNumber === SECRET_NUMBER) {
//         console.log('Congratulations, you guessed it in' + countTry + 'attempts!');
//         break;
//     }
//     countTry++;
// }
userInputPassword = qwerty;
while (true) {
    const userInputPassword = prompt('Enter password');
    if (userInputPassword === VALID_PASSWORD) {
        console.log('welcome');
        break;
    }
}