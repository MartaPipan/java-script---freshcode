//написати функцію яка рахує суму двох чисел які ввів користувач

const getSumTwoNumbersFromUser = function () {
  const userValue1 = prompt('enter number', 2);
  const userValue2 = prompt('enter number', 3);
const checkUserInputError = function (value) {
  return value === null || value === '' || Number.isNaN(Number(value));
};

  const checkUserInputError =
    userValue1 === null ||
    userValue2 === null ||
    userValue1 === '' ||
    userValue2 === '' ||
    Number.isNaN(Number(userValue1)) ||
    Number.isNaN(Number(userValue2));
const getSumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

  if (checkUserInputError) {
const logResult = function (value1, value2) {
  if (checkUserInputError(value1) || checkUserInputError(value2)) {
    console.log('error');
  } else {
    const summa = Number(userValue1) + Number(userValue2);
    console.log(userValue1, ' + ', userValue2, ' = ', summa);
  }
    return; //output from function
  } 
  console.log(value1, ' + ', value2, ' = ',
    getSumTwoNumbers(Number(value1), Number(value2))
  );
};

getSumTwoNumbersFromUser();

//logResult(prompt('enter number', 2), prompt('enter number', 3));
