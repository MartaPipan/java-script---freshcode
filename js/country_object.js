//  STEP1:

//  /**
//  * @param {string} name
//  * @param {string} capital
//  * @param {number} population
//  * @param {number} area
//  * @returns {number} getDensity
//  * @returns {string} getInfo
//  */
// const getInfo = function () {
//   return `${this.name} from capital ${this.capital}, 
//   population ${this.population} people, 
//   area ${this.area} 'km²'`;
// };

// const  getDensity = function() {
//   return `Population density ${this.population / this.area} per km²`
// }

// let countryLiteralOption = {
//   name: 'Portugal',
//   capital: 'Lisbon',
//   population: 10343066,
//   area: 82256,
//   getInfo,
//   getDensity,
// };
// let countryLiteralOption2 = {
//   name: 'Spain',
//   capital: 'Madrid',
//   population: 47450795,
//   area: 504030,
//   getInfo,
//   getDensity,
// };
// let countryLiteralOption3 = {
//   name: 'Ukraine',
//   capital: 'Kyiv',
//   population: 33365000,
//   area: 603628,
//   getInfo,
//   getDensity,
// };

// STEP2:

/**
 * @param {string} name
 * @param {string} capital
 * @param {number} population
 * @param {number} area
 * @returns {number} getDensity
 * @returns {string} getInfo
 */

const countryFunc = {
    getInfo: function () {
        return `${this.name} from capital ${this.capital}, population ${this.population} people, 
        area {this.area} 'km²'`;
    },
    getDensity: function () {
        return `Population density ${this.population / this.area} per km²`
    },
};

const countryLiteralOption = {
    name: 'Portugal',
    capital: 'Lisbon',
    population: 10343066,
    area: 82256,
    _proto_: countryFunc,
};


const countryLiteralOption2 = {
    name: 'Spain',
    capital: 'Madrid',
    population: 47450795,
    area: 504030,
};
countryLiteralOption2._proto_ = countryFunc;


let countryLiteralOption3 = {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: 33365000,
    area: 603628,
};
countryLiteralOption3._proto_ = countryFunc;


/**
 * @param {string} nameOfCountry 
 * @param {string} capital
 * @param {number} population 
 * @param {number} area 
 * @return {string} getInfo
 * @return {number} getDensity
 */

function Country(nameOfCountry, capital, population, area) {
    this.nameOfCountry = nameOfCountry;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.getDensity = function () {
        return this.population / this.area;
    }
}
function CountryPrototype() {
    this.getInfo = function () {
        return `${this.name} from capital ${this.capital}, population ${this.population} people, 
        area {this.area} km².`;
    }
    this.getDensity = function () {
        return `Population density ${this.population / this.area} per km²`;
    }
}

Country.prototype = new CountryPrototype(); 

const country4 = new Country('France', 'Paris',68373433, 643801);
const country5 = new Country('Italy', 'Rome', 58853482, 301340);
const country6 = new Country('Germany','Berlin', 84607016, 357600);
const country7 = new Country('Poland', 'Warsaw', 38036118,312696);



