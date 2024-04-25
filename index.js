// Написати функцію, яка буде повертати об'єкт родина.
// Ключ - член родини
// Значення - ім'я
// В родині повинно бути як мінімум 2 особи, можна запитати в користувача скільки особ в його родині.
// І всі данні (і ключ і значення) вносяться через prompt

// const family = {
//     'mather': 'Olena',
//     'cat': 'Ray',
// }

// function createFamily() {
//     let numberOfMembers;
//     while (true) {
//         const input = prompt('How many members are there in your family?');
//         numberOfMembers = Number(input);
//         if (input === null || Number.isNaN(numberOfMembers) || numberOfMembers < 2) {
//             console.log('Please enter a valid number (minimum 2).');
//         } 
//         else {
//             break;
//         }
//     }

//     let role;
//     let name;
//     let family = {};
//     for (let i = 0; i < numberOfMembers; i++) {
//         let role, name;

//         while (true) {
//            let role = prompt(`What is the role of family member ${i + 1}?`);
//             if (role === null || Number.isNaN(role)) {
//                 console.log('Please enter a valid role (not a number).');
//             }
//             else {
//                 break;
//             }
//         }

//         while (true) {
//             let name = prompt(`What is the name of the ${role}?`);
//             if (Number.isNaN(name) ||
//                 typeof name === 'number' ||
//                 name === null) {
//                 console.log('Invalid input. Please enter a valid name (not a number).');
//             }
//             else {
//                 break;
//             }
//         }

//         family[role] = name;
//     }
//     return family;
// }

// const family = createFamily();
// console.log(family)


function createFamily() {
    let numberOfMembers;
    while (true) {
        const input = prompt('How many members are there in your family?');
        numberOfMembers = Number(input);
        if (input === null || isNaN(numberOfMembers) || numberOfMembers < 2) {
            console.log('Please enter a valid number (minimum 2).');
        } 
        else {
            break;
        }
    }

    let family = {};
    for (let i = 0; i < numberOfMembers; i++) {
        let role;
        while (true) {
            role = prompt(`What is the role of family member ${i + 1}?`);
            if (!(/^[a-z][a-z]*$/.test(role)) ||
                role === null ||
                Number.isNaN(role) ||
                typeof role !== 'string') {
                console.log('Please enter a valid role (not a number).');
            }
            else {
                break;
            }
        }

        let name;
        while (true) {
            name = prompt(`What is the name of the ${role}?`);
            if (!(/^[A-Z][a-z]*$/.test(name)) ||
                name === null ||
                Number.isNaN(name) ||
                typeof name !== 'string') {
                console.log('Invalid input. Please enter a valid name.');
            }
            else {
                break;
            }
        }

        family[role] = name;
    }
    return family;
}

const family = createFamily();
console.log(family);