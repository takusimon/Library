const myLibrary = [];
const displayedBooks = [];

let shelf = document.querySelector(".shelf");
let bookDiv = document.createElement("div");
let bookTitle = document.createElement("h3");
let bookAuthor = document.createElement("p");
let bookPageCount = document.createElement("p");
let bookRead = document.createElement("p");

bookDiv.setAttribute("class", "book" )

function Book(title,author,pages,read){
    //Constructor Function that Makes book object
    if(!new.target){
        throw Error("You must use the 'new' Operator to call the constructor")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read){
    // Adds new book to Library
    myLibrary.push(new Book(title,author,pages,read));
}

function appendTitle(title){
    // Add title to "book"
    if (bookTitle.textContent){
        bookTitle.textContent = '';
    }
    bookTitle.textContent = title;
    bookDiv.appendChild(bookTitle);
}

function appendAuthor(author){
    if (bookAuthor.textContent){
        bookAuthor.textContent = '';
    }

    bookAuthor.textContent = author;
    bookDiv.appendChild(bookAuthor);
}

function appendPageCount(pages){
    if (bookPageCount.textContent){
        bookPageCount.textContent = '';
    }

    bookPageCount.textContent = pages;
    bookDiv.appendChild(bookPageCount);
}

function appendReadStatus(read){
    if (bookRead.textContent){
        bookRead.textContent = '';
    }

    if (read){
        bookRead.textContent = "READ";
    } else {
        bookRead.textContent = "NOT YET READ";
    }

    bookDiv.appendChild(bookRead);
}

function clearBook(){
    bookDiv.textContent = "";
}

function DisplayBooks(){
    for (let book of myLibrary){
        clearBook();
        for (let prop in book){
            switch(prop) {
                case "title":
                    appendTitle(`${book[prop]}`);

                case "author":
                    appendAuthor(`by ${book[prop]}`);
                
                case "pages":
                    appendPageCount(`${prop}: ${book[prop]}`);
                
                case "read":
                    appendReadStatus(book[prop]);
            }
        }
        shelf.appendChild(bookDiv);
    }
}
addBookToLibrary("Think Clearly","james Clear",230,true);

