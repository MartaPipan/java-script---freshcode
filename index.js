//чисті функції - детерміновані без побічних ефектів
/**
 *
 * @param {number} number1
 * @param {number} number2
 * @returns
 */
function getMultTwoNums(number1 = 5, number2 = 7) {
  return number1 * number2;
}
function getSumTwoNums(number1 = 5, number2 = 7) {
  return number1 + number2;
}
//HOF - hight order function
function calc (number1, number2, functionOperation){
  return functionOperation(number1, number2);
}
// debugger
calc(4, 3, getMultTwoNums) /// 4,3, f5dd72
const calc2 = function (number1, number2, functionOperation) {
    return functionOperation(number1, number2);
}
//не чиста
const getMultTwoNums2 = function () {
  const number1 = prompt();
  const number2 = prompt();
  return number1 * number2;
};

function areaRect(side1 = 5, side2 = 8) {
  return getMultTwoNums(side1, side2);
}

const object1 = new Object();
object1.prop1 = 'prop1';
const object2 = Object(7);
const object = {}; //new Object()
const button = {
  text: 'click',
};
button.width = 50;
button.bgcolor = 'blue';

console.log(button);


const symbol = '*';
//symbol = '-';