// alert(massage);     alert - janela com informação
// prompt(massage);    prompt - janela com recolha de informação de user
// confirm(pergunta?)  confirm-onde user pode escolher resposta
// let data = confirm('tu gostas ?');
// if (data) {
//     alert('welcome!');   
// }
// else {
//        alert('try again') 
//     }  

// operator switch-case ; ternary; if - else if - else

// // Array Masyvy
// let data = []       // igual: new Array(1, 6, 7, 8, 123, 'word, true);
// data = [1, 6, 7, 8, 123, 'word', true]
// ( aqui como informação fica em consola 
//index:
// 0 = 1;
// 1 = 6;
// 2 = 7;
// 3 = 8;  
// 4 = 123;
// 5 = 'word';
// 6 = true;)
// console.log(data[0]); - onde 0 = 1;
// console.log(data.length); 
// let matrix = [['world', true], [1, 3, 4, false], [12]]
//                    index=0         index=1      index=2
// matrix[0][0]='i love JavaScript!'
// // index0+1element'word'
// console.log(matrix[0][0]);


// // information:
// /**  тернарний
// * умова ? правдивий варіант : неправдивий варіант;
// *false 0 '' null undefined
// */

//    const userNumber = prompt('Enter your number', 50); 50- znachennia za zamovhuvanniam
//    const userNumber = prompt('Enter your number');
//    const userInputNumber = Number(userNumber); // Convert the string to a number


// null-user não escreveu nada ou fechou a janela em prompt
// let user = prompt('how are you?');
// if (user === null) {
//     alert('tu não respondeste');
// } else {
//     alert('Bem-vindo');
// }



// //false 0 '' null undefined
// /**   ''    null      world ;
//  *   0      0        NaN;
// */
// **Number.isNaN(number) 
// *|| Number.isInteger(number) === false
// */



// //написати функцію яка перевіряє на повноліття використовуючи тернарник
// //функція приймає вік людини(число) і повертає рядок!!! 'adult'  'not adult'
// //написати функцію яка запитує у користувача ввод будь чого
// //і повертає рядок thanks, якщо користувач щось то ввів
// //інакше повертає рядок 'Error'

// /**
//  *
//  * @param {number} age
//  * @returns {string}
//  */
// function getStatusAdultUser(age) {
//   // if (age >= 18) {
//   //   return 'adult';
//   // }
//   // return 'not adult';
//   return age >= 18 ? 'adult' : 'not adult';
// }
// // 1 - вигадати ім'я для функції
// // 2 - а чи приймає функція аргументи
// // 3 - запитати данні у користувача
// // 4 - перевірити данні
// // 5 - повернути результат

// function getAnswerUserInput() {
//   return prompt('enter any') ? 'thanks' : 'error';
// }


// //if  - складна умова
// //switch -вибір з певних варіантів

// //номер місяця - пору року
// //winter -1,2,12  spring-3,4,5   summer - 6, 7, 8   autumn - 9,10,11
  
//     const monthUser = prompt('month'); // '' null  word
//     const month = Number(monthUser); //  0  0     NaN
//     //
//     if (
//       month < 1 ||
//       month > 12 ||
//       Number.isNaN(month) ||
//       Number.isInteger(month) === false
//     ) {
//       console.log('wrong data');
//     } else if (month <= 2 || month === 12) {
//       //123456789 10 11 12
//       console.log('winter');
//     } else if (month <= 5) {
//       //3456789 10 11
//       console.log('spring');
//     } else if (month <= 8) {
//       //6789 10 11
//       console.log('summer');
//     } else {
//       //9 10 11
//       console.log('autumn');
//     }

//     if (month === 1 || month === 2 || month === 12) {
//       console.log('winter');
//     } else if (month === 3 || month === 4 || month === 5) {
//       console.log('spring');
//     } else if (month === 6 || month === 7 || month === 8) {
//       console.log('summer');
//     } else if (month === 9 || month === 10 || month === 11) {
//       console.log('autumn');
//     } else {
//       console.log('error');
//     }

  
// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('winter');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('spring');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('summer');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('autumn');
//     break;
//   default:
//     console.log(error);
// }
// // loop
// // передумова і післяумова

// let count = 0;
// const MAX_VALUE = 3;
// debugger
// // передумова
// while (count < MAX_VALUE) {
//   count++;
//   console.log(count);
// }

//   //післяумова
// count = 10;
// do {
//   count++;
//   console.log(count);
// } while (count < MAX_VALUE);
// //післяумова
// count = 10;
//   while (true) {
//     count++;
//     console.log(count);
//     if (count >= MAX_VALUE) break;
//   }
// // loop  for передумова  
// /**for (let index = 0(inicial contador);
//  * index < array.length(condition like i < MAX_VALUE,умова ); 
//  * index++(like i++)) {
// *    const element = array[index];
// *   (um ciclo-ITERACIA;vamos criar iterator) (i-index)
// *}
// */
//   const MAX_VAL = 5;
// //debugger
// for (let i = 0; i < MAX_VAL; i++) {
//     console.log(i);
// }

// запитувати в користувача пароль до тих пір, доки не введе вірний
// const VALID_PASSWORD = 'qwerty';
// while (true) {
//     const userInputPassword = prompt('Enter password');
//     if (userInputPassword === VALID_PASSWORD) {
//         console.log('welcome');
//         break;
//     }
// }
    // continue

    // const min = 10;
    // const max = 30;
    // const divisor = 7;

    // // вивести числа з діапазона які кратні devisor

    // for (let number = min; number <= max; number++) {
    //     if (number % divisor) {
    //         continue;
    //     }
    //     console.log(number);
    // }

    // let number = min;
    // while (number <=max) {
    //    if (number%divisor) {
    //        number++;
    //        continue;
    //     } 
    //     console.log(number);
    //     number++;
    // }
