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
    name: 'Portugal',
    population: 10343066,
    area: 82256,
    getDensity: function getCountryDensity() {
        return this.population / this.area;
    }
}

/**
 * 
 * @param {string} nameOfCountry 
 * @param {number} population 
 * @param {number} area 
 */
function Country(nameOfCountry, population, area) {
    this.nameOfCountry = nameOfCountry;
    this.population = population;
    this.area = area;
    this.getDensity = function () {
        return this.population / this.area;
    }
}