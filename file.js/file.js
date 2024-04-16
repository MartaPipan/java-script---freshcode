console.log(
  "Написати функцію, яка повертає рядок 'leap-year', 'year', 'wrong data' залежно від прийнятого аргументу - рік (додатнє ціле число від 1582 включно)"
  ' Написати функцію, яка приймає два числа і перевіряє кратність першого другим (повертає булеве значення) . Значення за замовчуванням 4 та 2 '
);
console.log(
  'У григоріанському календарі, високосні роки визначаються таким чином: кожен рік, який ділиться на чотири, є високосним, за винятком років, які діляться на 100, але не діляться на 400. Наприклад, 1700, 1800 і 1900 роки невисокосні, а 1600 і 2000 — високосні.'
);

//Number.isInteger() - перевірка на ціле число
/**
 * 
 * @param {any} value 
 * @param {number} START_YEAR defaultValue = 1582
 * @returns string
 *
 * @param {number} number1 4
 * @param {number} number2 2
 * @returns {boolean}
 */
const getStrTypeYear = function (value, START_YEAR = 1582) {
  const numberYear = Number(value);
  if (
    Number.isNaN(numberYear) ||
    Number.isInteger(numberYear) === false ||
    numberYear < START_YEAR
  ) {
    return 'wrong data';
  }
  if (
    (numberYear % 4 === 0 && numberYear % 100 !== 0) ||
    numberYear % 400 === 0
  ) {
    return 'leap-year';
  }
  return 'year';
};
function isMultiple(number1 = 4, number2 = 2) {
  return number1 % number2 === 0;
}


//getStrTypeYear('twenty twenty four') -> 'wrong data'
//getStrTypeYear(null) -> 'wrong data'
//getStrTypeYear(-456) -> 'wrong data'
//getStrTypeYear(2003.12) -> 'wrong data'
//getStrTypeYear(1900) -> 'year'
//getStrTypeYear('1900') -> 'year'
//getStrTypeYear('2000') -> 'leap-year'
//getStrTypeYear(2004) -> 'leap-year'
//getStrTypeYear(2004n) -> 'leap-year'