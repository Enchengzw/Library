const   myLibrary = [];

function Book(title, author, pages, Isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.Isread = Isread;
    this.getAuthor = function () {
        return (this.author);
    };
}

function addBooktoLibrary(title, author, pages, Isread) {
    let to_add = new Book(title, author, pages, Isread);
    myLibrary.push(to_add);
    console.log(Book.title);
    console.log(Book.author);
    console.log(Book.pages);
    console.log(Book.Isread);
    display();
}

function display()
{
    const to_display = myLibrary[0];
    let new_book = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let Isread = document.createElement('div');

    title.textContent = "Title : " + to_display.title;
    author.textContent = "Author : " + to_display.author;
    pages.textContent = "Pages : " + to_display.pages;
    Isread.textContent = to_display.Isread;

    new_book.appendChild(title);
    new_book.appendChild(author);
    new_book.appendChild(pages);
    new_book.appendChild(Isread);
    new_book.className = 'book';

    document.getElementsByClassName('library_grid')[0].appendChild(new_book);
}

addBooktoLibrary('Generic Book', 'John Doe', 100, 'read');
addBooktoLibrary('Generic Book', 'John Doe', 100, 'read');
addBooktoLibrary('Generic Book', 'John Doe', 100, 'read');