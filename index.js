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

const booksByAuthorAndGenre = getBookTitlesByAuthorAndGenre(books, author, genre);
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