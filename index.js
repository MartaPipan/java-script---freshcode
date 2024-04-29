 const arrNum11 = [1, 5, 2, 4, 6];

//map
//створює новий масив, заповнений результатами виклику наданої функції для кожного елемента в масиві, що викликає.

function incrementElem(elem) {
    return ++elem;
 }
 const newArrNum11 = arrNum11.map(incrementElem);
 console.log(newArrNum11);

const myUsers = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
// recolher so logins: 
const logins = myUsers.map(function (user) {
    return user.login; 
})
console.log(logins);

//recolher so id dos users:
const userId = myUsers.map(function (user) {
    return user.id; 
})
console.log(userId);
console.log(myUsers);

//Exercise1     /=Exercise2/
//recolher logins dos homens
const men = myUsers.map(function (user) {
    return user.isMale;
})
console.table(men);
const menLogins = men.map(function (user) {
    return user.login;
})
console.log(menLogins);


//Exercise2    /= Exercise1  
const menLogins2 = myUsers
    .filter(function (user) {
        return user.isMale;
    })
    .map(function (user) {
        return user.login;
    });
console.log(menLogins2); 
    

//Exercise 3
const products = [
  { name: "Молоко", price: 25, currency: "грн", quantity: 29 },
  { name: "Хліб", price: 12, currency: "грн", quantity: 37 },
  { name: "Яйця", price: 20, currency: "грн", quantity: 12 },
  { name: "Сир", price: 45, currency: "грн", quantity: 14 },
  { name: "Сік", price: 33, currency: "грн", quantity: 32 },
  { name: "Печиво", price: 7, currency: "грн", quantity: 120 },
];
//recolher products this prise < 20
const productPriceMinus20 = products
    .filter(function (product) {
        return product < 20;
    })
    .map(function (product) {
        return product.name;
    });
console.log(productPriceMinus20); 

    
//sort
//cортує елементи масиву на місці та повертає посилання на той самий масив, тепер відсортований

const arrNum22 = [1, 7, 12.101, 124, 5, 2, 4, 6];
//arrNum22.sort();
//console.log(arrNum22);
// console:(8) [1, 12.101, 124, 2, 4, 5, 6, 7]  ----from code ASCI
arrNum22.sort(compareNumbers);       
console.log(arrNum22);

// function compareNumbers(a,b) {
//     return a - b;
// }
// //console:(8) [1, 2, 4, 5, 6, 7, 12.101, 124]


function compareNumbers(a,b) {
    return b - a;
}
console.log();
//(8) [124, 12.101, 7, 6, 5, 4, 2, 1]


const users = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
console.table(users);

users.sort(function(user1, user2) {
    if (user1.login < user2.login) return -1;
    if (user1.login > user2.login) return 1;
    return 0;
})
console.table(users);


users.sort(function (user1, user2) {
    return user1.id - user2.id;
})
console.table(users);

// sort product of price:
console.table(products);

products.sort(function (item1, item2) {
    return item1.price - item2.price;
})
console.table(products);



//to sorted
//є версією методу для sort() . Він повертає новий масив з елементами, відсортованими в порядку зростання.
const newArrNum22 = arrNum22.toSorted(compareNumbers)     
console.log(arrNum22);


