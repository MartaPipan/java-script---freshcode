// const user = {
//     fname: 'Brad',
//     sname: 'Pit',
//     password: 'qwerty',
//     age = 60,
//     isAdult = true,
//     return: 'Hi, I\`m' + user.fname;
// };
// console.log(user);
// alert();

// const userTwo = {
//     fname: 'Brad',
//     sname: 'Pit',
//     password: 'qwerty',
//     age = 60,
//     isAdult = true,
//     return: `Hi, I'm  ${user.fname}`,
// }
// user.age = 60;
// user.isAdult = true;

// console.log(user.age);

// delete user.password;
// delete user.age;


// console.log(user);
// userVIP.isAdult = true;
// console.log(userVIP.saySecondName());

// function User(fnameValue, sname, password, age, isAdult=true) {
//   this.fname = fnameValue;
//   this.sname = sname;
//   this.password = password;
//   this.age = age;
//   this.isAdult = isAdult;
//   this.sayFullName = function () {
//     return `${this.fname} ${this.sname}`;
//   };
//   this.getBdYear = function () {
//     //body function
//     return 1963;
//   };
//   this.showSubscribe = function () {
//     //body function
//     return 'you sicribe';
//   };
// }

// console.log(user.saySecondName());
// const user2 = new User('Brad', 'Pitt', 'qwerty', 60, true);
// console.log(user2.sayFullName());

// const user3 = new User('Alex', 'Qwety', 'qwerty', 20, true);
// console.log(user3.sayFullName());

// const user4 = new User('Tom', 'Pitt', 'qwerty', 30, true);
// console.log(user4);

// /**
 * Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
*властивості:
*- name (рядок)
*- population (число)
*- area (число)
*метод:
*- getDensity() - повертає число 45.78
 * @param {string} name 
 * @param {number} population 
 * @param {number} area 
 * @returns {number} getDensity
 *
 */
let countryLiteralOption = {
    countryName: 'Portugal',
    countryPopulation: 10343066,
    countryArea: 82256,
    getDensity: function getCountryDensity(countryPopulation, countryArea) {
        return 45.78;
    }
    
}

function Country(nameOfCountry, population, area) {
    this.nameOfCountry = nameOfCountry;
    this.population = population;
    this.area = area;
    this.getDensity = function getDensity(population, area) {
        getDensity = this.population / this.area;
        return `${this.getDensity}`;
    }
}
