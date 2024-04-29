const arrNum = [4, 8, 2, 3, 6, 7]
/** 
for (let index = 0; index < arrNum.length; index++) {
    const element = arrNum[index];
    if (element%2) {
        console.log(element);
    }
}
for (let index = 0; index < arrNum.length; index++) {
    console.log(arrNum[index]**2); 
}
*/

forEach()
const arrNum1 = [4, 8, 2, 3, 6, 7]
//EXAMPLE1
//STEP1
function logOdd(element) {
    if (element%2) {
        console.log(element);
    }
}
//STEP2
arrNum1.forEach(logOdd);
//STEP3
arrNum1.forEach(function(element) {console.log(element%2)})

//EXAMPLE2
//STEP1
function logPow2(element) {
    console.log(element**2);
}
//STEP2
arrNum1.forEach(logPow2);
//STEP3
arrNum1.forEach(function(element) {console.log(element**2)})



