logMessage1();
//declaration
function logMessage1() {
  console.log('hi, from function 1');
}
logMessage1();
const userValue = prompt('enter number', 5);


//expression
const logMessage2 = function () {
  console.log('hi, from function 2');
};
logMessage2();

//arrow
const logMessage3 =  () => {
  console.log('hi, from function 3 arrow');
};
logMessage3();
console.log(userValue, typeof userValue);