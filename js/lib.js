const myLibrary = [];

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
    shelf.querySelectorAll(".book").forEach(book => book.remove());
    for (let book of myLibrary){
        
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "book" );
        bookDiv.dataset.id = book.id;
        let bookTitle = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookPageCount = document.createElement("p");
        let bookRead = document.createElement("p");
        let deleteBook = document.createElement("button");
        deleteBook.setAttribute("class","delete-bk-btn");
        deleteBook.textContent = "X";

        for (let prop in book){
            switch(prop) {
                case "title":
                    bookTitle.textContent = `${book[prop]}`;
                    break;                 

                case "author":
                    bookAuthor.textContent = `by ${book[prop]}`;
                    break;
                
                case "pages":
                    bookPageCount.textContent = `${prop}: ${book[prop]}`;
                    break;
                
                case "read":
                    if (book[prop] == 'true'){
                        bookRead.textContent = "READ";
                        } else {
                        bookRead.textContent = "NOT YET READ";
                     }
                    break;
                
            }
        }
        bookDiv.append(bookTitle,bookAuthor,bookPageCount,bookRead,deleteBook);
        shelf.appendChild(bookDiv);
    }
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

shelf.addEventListener('click',(event)=> {
    if(event.target.classList.contains("delete-bk-btn")){
        const book = event.target.closest("[data-id]")
        const bookId = book.dataset.id;
        const index = myLibrary.findIndex(book => book.id === bookId);

        myLibrary.splice(index,1);
        book.remove();
    }
})