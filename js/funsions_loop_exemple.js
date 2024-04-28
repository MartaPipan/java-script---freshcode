// // information:
// /**  тернарний
// * умова ? правдивий варіант : неправдивий варіант;
// *false 0 '' null undefined
// */

    const userNumber = prompt('Enter your number');
    const userInputNumber = Number(userNumber); // Convert the string to a number

// //false 0 '' null undefined
// /** ''    null      world ;
//  *   0      0        NaN;
// */
// **Number.isNaN(number) 
// *|| Number.isInteger(number) === false
// */

let subscriber = [
    { user1: 'Andrew', isFriend: true },
    { user2: 'Igor', isFriend: true },
    { user3: 'Sarah', isFriend: false }, 
    { user4: 'Jessica', isFriend: false },
    { user5: 'Francisco', isFriend: true },
    { user6: 'Tatiana', isFriend: true },
    { user7: 'Clara', isFriend: true },
    { user8: 'Maria', isFriend: true }];
    
function congratsIfMoreThan100 (userSubscriber) {
    if (userSubscriber.length > 100) {
        alert('WELCOME!');
    } else {
        alert('Not enough')
    }
}
congratsIfMoreThan100(userSubscriber);


/**
  JS LOOPS:
-for
-for of 
-for in
-while
-do while
*/


//for
for (let i = 0; index < subscriber.length; i++) {
    // index===0
    // index < subscriber.length ===true
    // index+=1 like index++  (index+1)
    console.log(subscriber[i]); 
}
//for of   ( == for)
for (const item of subscriber) {
    console.log(item);
}
//for in  ()
const obj = {
    name: Vitaliy,
    age: 18,
    sex: 'male',
    hobby: 'football'
} 
   
for (const age in obj) {
   console.log(obj.age);
}
/** 
for (const age in obj) {
    if (Object.hasOwnProperty.call(obj, age)) {
        const element = object[age]; 
    }
}
console.log(`${age}: ${obj[age]}`);
 */ 

//while
let i = 0;
while (i < subscriber.length) {
    console.log(subscriber[i]);
    i++;
}

//do while
do {
    console.log(subscriber[i]); 
    i++;
} while (i<subscriber.length);

let arr = [1, 2, 3, 4, 5, 6, 7]
let index = 0;
function squareArr(arr) {
    for (let index = 0; index < arr.length; index++) {   
        const element = Math.sqrt(arr[index]);
    }
}





const userName = 'Maria';   // 1
function createUserName1(name) {
    const result = name.toUpperCase();
    return result;
}
function createUserName(name) {
    return name.toUpperCase();    // 2
}
//const userName = createUserName();
const updatedName = createUserName(userName);   // 3
console.log(userName);      // 4



//FUNCTION DECLARATION
function sayHello(greetings) {
    alert(greetings);
}
sayHello('Bonjour')

// FUNCTION EXPRESSION
const sayHello2 = function(greetings) {
    alert(greetings);
}
sayHello2('ola')
    
// METHOD OBJECT
const car = {
    speed: 100,
    color: white,
    drive: function () {
       return 'i drive very fast!' 
    }
}
const greetings = car.drive();
console.log(greetings);

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

    


