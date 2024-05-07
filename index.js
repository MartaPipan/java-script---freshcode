 const arrNum11 = [1, 5, 2, 4, 6];

//map
//створює новий масив, заповнений результатами виклику наданої функції для кожного елемента в масиві, що викликає.

function incrementElem(elem) {
    return ++elem;
 }
 const newArrNum11 = arrNum11.map(incrementElem);
 console.log(newArrNum11);

const myUsers = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
// recolher so logins: 
const logins = myUsers.map(function (user) {
    return user.login; 
})
console.log(logins);

//recolher so id dos users:
const userId = myUsers.map(function (user) {
    return user.id; 
})
console.log(userId);
console.log(myUsers);

//Exercise1     /=Exercise2/
//recolher logins dos homens
const men = myUsers.map(function (user) {
    return user.isMale;
})
console.table(men);
const menLogins = men.map(function (user) {
    return user.login;
})
console.log(menLogins);


//Exercise2    /= Exercise1  
const menLogins2 = myUsers
    .filter(function (user) {
        return user.isMale;
    })
    .map(function (user) {
        return user.login;
    });
console.log(menLogins2); 
    

//Exercise 3
const products = [
  { name: "Молоко", price: 25, currency: "грн", quantity: 29 },
  { name: "Хліб", price: 12, currency: "грн", quantity: 37 },
  { name: "Яйця", price: 20, currency: "грн", quantity: 12 },
  { name: "Сир", price: 45, currency: "грн", quantity: 14 },
  { name: "Сік", price: 33, currency: "грн", quantity: 32 },
  { name: "Печиво", price: 7, currency: "грн", quantity: 120 },
];
//recolher products this prise < 20
const productPriceMinus20 = products
    .filter(function (product) {
        return product < 20;
    })
    .map(function (product) {
        return product.name;
    });
console.log(productPriceMinus20); 

    
//sort
//cортує елементи масиву на місці та повертає посилання на той самий масив, тепер відсортований

const arrNum22 = [1, 7, 12.101, 124, 5, 2, 4, 6];
//arrNum22.sort();
//console.log(arrNum22);
// console:(8) [1, 12.101, 124, 2, 4, 5, 6, 7]  ----from code ASCI
arrNum22.sort(compareNumbers);       
console.log(arrNum22);

// function compareNumbers(a,b) {
//     return a - b;
// }
// //console:(8) [1, 2, 4, 5, 6, 7, 12.101, 124]


function compareNumbers(a,b) {
    return b - a;
}
console.log();
//(8) [124, 12.101, 7, 6, 5, 4, 2, 1]


const users = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
console.table(users);

users.sort(function(user1, user2) {
    if (user1.login < user2.login) return -1;
    if (user1.login > user2.login) return 1;
    return 0;
})
console.table(users);


users.sort(function (user1, user2) {
    return user1.id - user2.id;
})
console.table(users);

// sort product of price:
console.table(products);

products.sort(function (item1, item2) {
    return item1.price - item2.price;
})
console.table(products);



//to sorted
//є версією методу для sort() . Він повертає новий масив з елементами, відсортованими в порядку зростання.
const newArrNum22 = arrNum22.toSorted(compareNumbers)     
console.log(arrNum22);


const books = [
{ title: "1984", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 328 },
{ title: "Колгосп тварин", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 286 },
{ title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 256 },
{ title: "Гаррі Поттер і таємна кімната", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 336 },
{ title: "Гаррі Поттер і в'язень Азкабану", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 448 },
{ title: "Гаррі Поттер і келих вогню", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
{ title: "Гаррі Поттер і орден Фенікса", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 864 },
{ title: "Гаррі Поттер і Принц-півкров", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 704 },
{ title: "Гаррі Поттер і смертельні реліквії", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
{ title: "Франкенштейн", author: "Мері Шеллі", genre: "Жахи", pages: 280 },
{ title: "Три товариші", author: "Еріх Марія Ремарк", genre: "Роман", pages: 592 },
{ title: "Матильда", author: "Роальд Даль", genre: "Дитяча література", pages: 240 },
{ title: "Маленький принц", author: "Антуан де Сент-Экзюпери", genre: "Філософська проза", pages: 96 },
{ title: "Триумфальна арка", author: "Еріх Марія Ремарк", genre: "Роман", pages: 515 },
{ title: "Американський психопат", author: "Брет Істон Елліс", genre: "Художній роман", pages: 399 },
{ title: "Коротка історія часу", author: "Стивен Гокінг", genre: "Наукова література", pages: 256 },
{ title: "Заводи", author: "Тед Х'юз", genre: "Історія", pages: 672 },
{ title: "Смерть в Венеції", author: "Томас Манн", genre: "Психологічний роман", pages: 128 },
{ title: "Вікторія", author: "Дейв Ітонс", genre: "Альтернативна історія", pages: 592 },
{ title: "Таємниці Старого Норвегії", author: "Дерек Б. Міллер", genre: "Фентезі", pages: 656 },
{ title: "Дивна смерть", author: "Пол К. Фейр", genre: "Детектив", pages: 384 },
{ title: "Війна майбутнього", author: "Герберт Йенс", genre: "Наукова фантастика", pages: 384 },
{ title: "Думка", author: "Стівен Кінг", genre: "Жахи", pages: 432 },
{ title: "Воно", author: "Стівен Кінг", genre: "Жахи", pages: 502 },
]

// 1) Поверніть перший об'єкт з жанру Роман   ---find

console.log(
    books.find(function (book) {
    return book.genre ==='Роман';
})
);

// 2) Поверніть останній індекс об'єкту з жанру Роман   findLastIndex
console.log(
    books.findLastIndex(function (book) {
    return book.genre ==='Роман';
})
);

// 3) Поверніть масив книг з жанром Фентезі де кількість сторінок більше 600
const fantasyMore600Pages = books
    .filter(function (book) {
        return book.genre === 'Фентезі';
    })
    .map(function (book) {
        return book.pages > 600;
    })
console.log(fantasyMore600Pages);
    
// 4) Поверніть масив з назв книг
const bookTitles = books.
    map(function (book) {
        return book.title
})
console.log(bookTitles);

// 5) Напишіть функцію, яка приймає аргументи: масив книг books, автора і жанр, і повертає масив назв книг(переданого автора і жанру) 

function getBookTitlesByAuthorAndGenre(books, author, genre) {
    return books
        .filter(function(book) {
            return book.author === author && book.genre === genre;
        })
        .map(function(book) {
            return book.title;
        });
}

const booksByAuthorAndGenre = getBookTitlesByAuthorAndGenre(books);
console.log(booksByAuthorAndGenre);

// 6) Порахуйте кількість книг з жанром Фентезі (треба фільтром отримати новий масив і дістати його довжину)
const fantasyBooks = books
    .filter(function (book) {
        return book.genre === 'Фентезі';
    })

const countFantasyBooks = fantasyBooks.length;
console.log(countFantasyBooks);

// 7) Порахуйте кількість книг з кількість сторінок від 200 до 400
const books200to400 = books
    .filter(function (book) {
        return book.pages >= 200 && book.pages <= 400;
    })
const countBooks200to400 = books200to400.length;
console.log(countBooks200to400);

// 8) Знайдіть книжку з найменшою кількістю сторінок (треба відсортувати та вивести елемент з індеком 0)

const sortedBooks = function(book1, book2) {
    return book1.pages - book2.pages;
}
books.sort(sortedBooks);
const bookWithMinPages = books[0];
console.log(bookWithMinPages, sortedBooks[0]);



class Squirrel {
    /**
     * @param{string} name;
     * @param{string}color;
      */
    // #name;
    // #color;

    // const COLOR = ['red', 'gray', 'rainbow'];

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    
    get name() {
        this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value most be a string');
        }
        if (value.langth < 3) {
            throw new RangeError('Name must be at last 3 characters long');
        }
        this._name = value;
    }
    get color() {
        this._color;
    }
    set color(value) {
        const COLORS = ['red', 'gray', 'rainbow']
        if (typeof value !== 'string') {
            throw new TypeError('Value most be string');
        }
        if (COLORS.includes(value) === false) {
            throw new RangeError('Color does not exist');
        }
        this._color = value;
    }
    jump() {
        return `${this._name} jumping`;
    }
}


try {
    const squirrel1 = new Squirrel('Maggi', 'rainbow');
    console.log(squirrel1.jump());
} catch (error) {
    console.error(error);
}
    
class FlySquirrel extends Squirrel{
    /**
     * @param{string}name;
     * @param{string}color;
     * @param{number}maxFlyLength;
     */
    //#maxFlyLength;

    constructor(name, color, maxFlyLength) {
        super(name, color);
        this._maxFlyLength = maxFlyLength;
    }
   
    get maxFlyLength() {
        this._maxFlyLenght;
    }
    set  maxFlyLength(value) {
        if (typeof value !== 'number' && value < 0) {
            throw new TypeError('Value most be positive number');
        }
        if (value > 0 && value <= 50) {
            throw new RangeError('Max fly length must be greater than 50');
        }
        this._maxFlyLength = value;
    }

     jump() {
        return`${this._name} jumping`;
    }
    fly() {
        return `${this._name} flying at max  ${this._maxFlyLength} length`;
    }
}
try {
    const squirrel2 = new FlySquirrel('Kaila', 'gray', 57);
    console.log(squirrel2.jump()+' and '+squirrel2.fly());
} catch (error) {
    console.error(error);
    }

class MagicSquirrel extends FlySquirrel{
    /**
     * @param{string}name;
     * @param{string}color;
     * @param{number}maxFlyLength;
     * @param{string}words;
     */
    //#words;
    //const WORDS = ['I', 'am', 'a', 'magic', 'squirrel'];
    constructor(name, color, maxFlyLength, words) {
        super(name, color, maxFlyLength);
        this._words = words;
    }
    get words() {
        this._words;
    }
    set words(value) {
        const WORDS = ['I', 'am', 'a', 'magic', 'squirrel'];
        if (typeof value !== 'string') {
            throw new TypeError('Value most be a string');
        }
         if (WORDS.includes(value) === false) {
            throw new RangeError('Words does not exists');
        }
        this._words = value;
    }
    jump() {
        return`${this._name} jumping`;
    }
    fly() {
        return `${this._name} flying at max ${this._maxFlyLength} length`;
    }
    say() {
        return 'I am a magic squirrel'
    }

}
try {
    const squirrel3 = new MagicSquirrel('Banckly', 'gray', 73);
    console.log(squirrel3.jump()+', '+squirrel3.fly()+' and say: '+squirrel3.say()+'!');
} catch (error) {
    console.error(error);
    }