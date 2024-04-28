false
//0, -0, NaN, undefined, null, ''

// //false 0 '' null undefined
// /** ''    null      world ;
//  *   0      0        NaN;
// */
// **Number.isNaN(number) 
// *|| Number.isInteger(number) === false
// */

// Primitive:
string
/* confirm type of data types:
* const user = 'Marta';
*console.log(typeof user);   console say type for us
*/
number
/* 
*confirm type of data types:
*const number = 123445;
*console.log(typeof number);   console say type for us
*/
NaN -
   // Not a number;

boolean
/**
 *confirm type of data types:
 *const boolTrue = true;
 *const boolFalse = false;
 *console.log(type of boolTrue); 
 *console.log(typeof boolFalse);   console say type for us
 */
null
/** 
*confirm type of data types:
*const someNullValue = null;
*console.log(typeof someNullValue);   console say type for us
*/
undefined
/**
 *confirm type of data types:
 *const someUndefinedValue;     type not exist = undefined;
 *console.log(typeof someUndefinedValue);   console say type for us
 */

BigInt
/**
 * const bigInt = 99999999999999999999999n;
 * console.log(bigInt);
 * const bigInt1 = BigInt('99999999999999999999999');
 * console.log(bigInt1);
 * console.log(99999999999999999999999);
 * console.log(Number.MAX_SAFE_INTEGER);
 */

symbol
/*
* const user = {
    id:10;
    age: 20;
    height: 170;
};
user.id = 'some id';        //result:const user = {
                                     id: some Id;
                                     age: 20;
                                     height: 170;
                                    };
*console.log(user);

Example:
const user11 = {
    id:101;
    age: 30;
    height: 172;
};
const symbol = Symbol('some new symbol');
user11.[symbol] = 500;
console.log(user11);
console.log(user11[symbol]);

const id = Symbol('some new symbol');
user11.[id] = 500;
console.log(user11);
console.log(user11[id]);
*/


OBJECT:   //not primitive;
/*
const.obj = {};
                     const person = {
                        name: 'Ine',
                        age: 23,
                        gender: 'male'
                     }
                        console.log(person);
const.obj2 = new Object;
                     const obj = {};
                     obj.name = 'Olga';
                     obj.age = 30;
                     obj.gender = 'female';
                     obj['hobby'] = 'football';
                     console.log(obj.name, obj.age);
*/

// stack----------------celula(for primitive)end(name: 'Jonh', dog)
// haap----------------- celula for function corp: name: 'Jonh', age: 23, sex: 'male'; massive info, ect.

// 1. Літеральне оголошення об’єкта:
// const person = {
//     name: 'Jonh',
//     age: 23,
//     gender: 'male'
// }
// const person2 = {
//     name: 'Jonh',
//     age: 23,
//     gender: 'male'
// }
// console.log(person === person2);// -------------resposta: false, mas se
// const person = person2 //----------------------- dados de 'person' passam ser dados de 'person2' 
// const dog = {
//     name: 'Mary',
//     age: 2,
// }


//OPERATOR:
//  if-else operator
const isUserLogIn = true;
if (isUserLogIn) {
    alert('You are log in!');
} else {
    alert('You are not log inn');
}

//   ternary operator
const isUserLogIn2 = true;
isUserLogIn2 ? alert('You are log in!') : alert('You are not log in!');

//    switch operator
const age = 30;
switch (age) {
    case 10:
        alert('Happy birthday, give me a kiss!');  
        break;
    case 20:
        alert('Happy birthday, give me a hug!');  
        break;
     case 30:
        alert('Happy birthday, give me a grandchildren!');  
        break;
    default:
        alert('Happy birthday, give me your legacy!');
        break;
}

const groupA = [
    'FC Arsenal London',
    'FC Real Madrid',
    'FC Bayer Munich',
    'FC Milan',
]
// function createTeamForCalendarPage(teams) {
//     teams.forEach((item, index) => {
//         const onlyClubName = item.split('')[1]
//         console.log(onlyClubName);
//     });
//     return teams;
// }
//  const newArr = [...groupA]; //create new massiv;-----    spredoperator [...   ] igual:
// return teams.map((item) => item.split('')[1]);

function createTeamForCalendarPage(teams) {
    return teams.map((item) => item.split('')[1]);  
}

console.log(newArr === groupA);

console.log(createTeamForCalendarPage(groupA));
console.log(groupA);

