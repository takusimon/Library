class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    static library = [];
    static shelf = document.querySelector(".shelf");

    static addBookToLibrary (title,author,pages,read){
        this.library.push(new Book(title,author,pages,read))
    }

    static displayBooks(){
        this.shelf.querySelectorAll(".book").forEach(book => book.remove());
        for (let book of this.library){
            let bookDiv = document.createElement("div");
            bookDiv.setAttribute("class", "book");
            bookDiv.dataset.id = book.id;
            let bookTitle = document.createElement("h3");
            let bookAuthor = document.createElement("p");
            let bookPageCount = document.createElement("p");
            let bookRead = document.createElement("p");
            let deleteBook = document.createElement("button");
            deleteBook.setAttribute("class","delete-bk-btn");
            deleteBook.textContent = "X";
            let readBtn = document.createElement("button");
            readBtn.setAttribute("class","read-btn");

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
                        readBtn.textContent = "Mark Unread";
                        } else {
                        bookRead.textContent = "NOT YET READ";
                        readBtn.textContent = "Mark Read";
                     }
                        break;
                
                }
            }
            bookDiv.append(bookTitle,bookAuthor,bookPageCount,deleteBook,bookRead,readBtn);
            this.shelf.appendChild(bookDiv);
        }
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

    Book.addBookToLibrary(title,author,pages,read);
    Book.displayBooks();
}

const dialog = document.querySelector("#book-form");
const form = document.querySelector("#add-book");
const submitBtn = document.querySelector("#submit-btn");

dialog.addEventListener("close", () => form.reset());


submitBtn.addEventListener("click",bookCreator);

Book.shelf.addEventListener('click',(event)=> {
    if(event.target.classList.contains("delete-bk-btn")){
        const book = event.target.closest("[data-id]")
        const bookId = book.dataset.id;
        const index = myLibrary.findIndex(book => book.id === bookId);

        myLibrary.splice(index,1);
        book.remove();
    }
})

Book.shelf.addEventListener('click',(event)=> {
    if (event.target.classList.contains("read-btn")){
        const clickedBtn = event.target;
        const readElement = event.target.previousElementSibling;
        const readStatus = readElement.textContent;
        if (readStatus === "READ"){
            readElement.textContent = "NOT YET READ";
            clickedBtn.textContent = "Mark Read";
        } else {
            readElement.textContent = "READ";
            clickedBtn.textContent = "Mark Unread";
        }
    }
})