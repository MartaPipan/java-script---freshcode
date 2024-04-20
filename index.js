// loop

const VALID_PASSWORD = "qwerty"
const MAX_AMOUNT_TRY = 3

// запитувати в користувача пароль до тих пір, доки не введе вірний
// const VALID_PASSWORD = 'qwerty';
while (true) {
    const userInputPassword = prompt('Enter password');
    if (userInputPassword === VALID_PASSWORD) {
        console.log('welcome');
        break;
    }
}

// // запитувати в користувача пароль до тих пір, доки не введе вірний, але обмежити спроби кількістю 3 рази
// //const VALID_PASSWORD = 'qwerty';
// //const MAX_AMOUNT_TRY = 3;
// let countTry = 0;
//  while (true) {
//      const userInputPassword = prompt('Enter password');
//      countTry++;
//    if(userInputPassword === VALID_PASSWORD) {
//      console.log('welcome');
//      break;
//   }
//    if(countTry >= MAX_AMOUNT_TRY){
//      console.log('sorry');
//      break;
//    }
//  }
// // запитувати в користувача пароль до тих пір, доки не введе вірний, але обмежити спроби кількістю 3 рази
// //const VALID_PASSWORD = 'qwerty';
// //const MAX_AMOUNT_TRY = 3;
// let countTry = 0;
//  while (countTry >= MAX_AMOUNT_TRY) {
//      const userInputPassword = prompt('Enter password');
//    if(userInputPassword === VALID_PASSWORD) {
//      console.log('welcome');
//      break;
//    }
//       countTry++;
//      if(countTry === MAX_AMOUNT_TRY) {
//      console.log('sorry');
//      break;
//    }
//  }



// // LOOP FOR
// //запитувати в користувача пароль до тих пір, доки не введе вірний, але обмежити спроби кількістю 3 рази 
// //const VALID_PASSWORD = 'qwerty';
// //const MAX_AMOUNT_TRY = 3;

// //      for (let i=0;          i<MAX_AMOUNT_TRY;        i++)
// for (let tryCount = 0; tryCount < MAX_AMOUNT_TRY; tryCount++) {
//    const userInputPassword = prompt('Enter password');
//    if (userInputPassword === VALID_PASSWORD) {
//      console.log('welcome');
//      break;
//    }
//    if (tryCount === MAX_AMOUNT_TRY - 1) {
//      console.log('sorry');
//     }
// }
// for (i = 0; i < MAX_AMOUNT_TRY; i++) {
//    const userInputPassword = prompt('Enter password');
//    if (userInputPassword === VALID_PASSWORD) {
//      console.log('welcome');
//      break;
//    }
//    if (i === MAX_AMOUNT_TRY - 1) {
//      console.log('sorry');
//     }
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// array.forEach(element => {
    
// });
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// for (const iterator of object) {
    
// }