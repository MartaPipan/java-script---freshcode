// primitive:
// string
// number
// boolean
// null
// undefined
// BigInt
// symbol

// stack ---------------- celula (for primitive)end (name: 'Jonh', dog)
// haap ----------------- celula for function corp: name: 'Jonh',age: 23,sex: 'male'; massive info, ect.

// const person = {
//     name: 'Jonh',
//     age: 23,
//     sex: 'male'
// }
// const person2 = {
//     name: 'Jonh',
//     age: 23,
//     sex: 'male'
// }
// console.log(person === person2);// -------------resposta: false, mas se
// const person = person2 //----------------------- dados de 'person' passam ser dados de 'person2' 
// const dog = {
//     name: Kaia,
//     age: 2,
// }
const groupA = [
    'FC Arsenal London',
    'FC Real Madrid',
    'FC Bayer Munich',
    'FC Milan',
]
// function createTeamForCalendarPage(teams) {
//     teams.forEach((item, index) => {
//         const onlyClubName = item.split('')[1]
//         console.log(onlyClubName);
//     });
//     return teams;
// }
//  const newArr = [...groupA]; //create new massiv;-----    spredoperator [...   ] igual:
// return teams.map((item) => item.split('')[1]);

function createTeamForCalendarPage(teams) {
    return teams.map((item) => item.split('')[1]);  
}

console.log(newArr === groupA);

console.log(createTeamForCalendarPage(groupA));
console.log(groupA);


// method exemple:
// 'hello'.toUpperCase()----method.toUpperCase----- result='HELLO';
// 'Hello my dear friend'.split() method.split-com ()vazios-------result: ['Hello my dear friend']------result:
// (20)['H', 'e', 'l', 'l', 'o', 'm', 'y', 'd', 'e', 'a', 'r', 'f', 'r', 'i', 'e', 'n', 'd']

// 'Hello my dear friend'.split('')----('') - escolha todas palavras:
// (4) ['Hello', 'my', 'dear', 'friend']

