/**
 * Написати функцію, яка перевіряє можливість існування трикутника.
*Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення *за замовчуванням 3,4,5.
*Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін *більша за третю.
*@param {number} sideA
*@param {number} sideB
*@param {number} sideC
*@returns - boolean (true ou false)
 */

function isTrianglePossible(sideA = 3, sideB = 4, sideC = 5) {
    if ((sideA+sideB>sideC) && (sideA+sideC>sideB) && (sideB+sideC>sideA)) {
    return true    
    }
    return false
}
let checkTriangleExist1 = isTrianglePossible(3, 4, 5);
console.log(checkTriangleExist1);
let checkTriangleExist2 = isTrianglePossible(7, 3, 9);
console.log(checkTriangleExist1);
let checkTriangleExist3 = isTrianglePossible(2, 6, 8);
console.log(checkTriangleExist3);



/**
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
        return countryPopulation / countryArea;
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