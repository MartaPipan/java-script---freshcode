const arrNum10 = [1, 5, 9, 4, 6];
// FILTER
//створює копію частини даного масиву, відфільтровану лише до елементів із даного масиву, які проходять перевірку, реалізовану наданою функцією.

const newArrNum10 = arrNum10.filter(function (element) {
    return element > 3;
});
console.log(arrNum10);
console.log(newArrNum10);

const users = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
users.forEach(function(user) {
    user.isSubscribe = Math.random()>0.5
})
console.table(users);

const userWithSubscribe = users.filter(function (user) {
    return user.isSubscribe === true;
})
console.table(userWithSubscribe);

//escolher womans de  users
const userWomans = users.filter(function (user) {
    return user.isMale===false;
})
console.table(userWomans);