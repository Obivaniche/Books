// книга
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.status = 'available';
    }
};

// библиотека
class Library {
    constructor() {
        this.books = [];
    }

    // добавление новой книги
    addNewBook(book) {
        this.books.push(book);
    }

    // берем книгу
    borrowBook(ISBN) {
        const book = this.books.find(b => b.ISBN === ISBN);
        if (book && book.status === 'available') {
            // изменяем статус книги на занята
            book.status = 'taken';
            return `Вы взяли книгу: "${book.title}"`;
        } else if (book) {
            return `Книга "${book.title}" уже взята.`;
        } else {
            return `Книга с ISBN ${ISBN} не найдена.`;
        }
    }

    // возвращаем книгу
    returnBook(ISBN) {
        const book = this.books.find(b => b.ISBN === ISBN);
        if (book && book.status === 'taken') {
            // изменяем статус книги на доступна
            book.status = 'available';
            return `Вы вернули книгу: "${book.title}"`;
        } else if (book) {
            return `Книга "${book.title}" уже доступна.`;
        } else {
            return `Книга с ISBN ${ISBN} не найдена.`;
        }
    }

    // свободные книги
    listAvailableBooks() {
        const availableBooks = this.books.filter(b => b.status === 'available');
        if (availableBooks.length > 0) {
            return availableBooks.map(b => `Доступно: ${b.title} автор ${b.author} (ISBN: ${b.ISBN})`);
        } else {
            return 'Нет доступных книг.';
        }
    }
};

// примеры

// константы
const library = new Library();
const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('Dirk Gentlys Holistic Detective Agency', 'Douglas Adams', '1476782997');

// добавляем книги
library.addNewBook(book1);
library.addNewBook(book2);

// проверяем статусы
console.log(library.listAvailableBooks());
console.log(library.borrowBook('1234567890'));
console.log(library.listAvailableBooks());
console.log(library.returnBook('1234567890'));
console.log(library.listAvailableBooks());
