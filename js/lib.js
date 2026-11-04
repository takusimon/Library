const myLibrary = [];
const displayedBooks = [];

let shelf = document.querySelector(".shelf");








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


function displayBooks(){
    for (let book of myLibrary){
        
        displayedBooks.push(book);
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "book" );
        bookDiv.setAttribute("id", book["id"]);
        let bookTitle = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookPageCount = document.createElement("p");
        let bookRead = document.createElement("p");
        let deleteBook = document.createElement("button");
        deleteBook.setAttribute("id","delete-bk-btn");
        deleteBook.textContent = "X";

        for (let prop in book){
            switch(prop) {
                case "title":
                    bookTitle.textContent = `${book[prop]}`;
                    

                case "author":
                    
                    bookAuthor.textContent = `by ${book[prop]}`;
                
                case "pages":
                    bookPageCount.textContent = `${prop}: ${book[prop]}`
                
                case "read":
                    if (book[prop] == 'true'){
                        bookRead.textContent = "READ";
                        } else {
                        bookRead.textContent = "NOT YET READ";
                     }
                    bookDiv.appendChild(bookRead);
            }
        }
        bookDiv.append(bookTitle,bookAuthor,bookPageCount,bookRead,deleteBook);
        shelf.appendChild(bookDiv);
    }
    myLibrary.pop();
}
function bookCreator(event){
    event.preventDefault();

    let title,
        author,
        pages,
        read;
    
    title = form.title.value;
    author = form.author.value;
    pages = form.pages.value;
    read = form.read.value;

    form.reset()

    addBookToLibrary(title,author,pages,read);
    displayBooks();
}

const dialog = document.querySelector("#book-form");
const form = document.querySelector("#add-book");
const submitBtn = document.querySelector("#submit-btn");

dialog.addEventListener("close", () => form.reset());


submitBtn.addEventListener("click",bookCreator);