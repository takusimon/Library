const myLibrary = [];

function Book(title,author,pages,read){
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
    let book = new Book(title,author,pages,read);
    myLibrary.push(book);
}

addBookToLibrary("Think Clearly","james Clear",230,true);

for (let book of myLibrary) {
    for (let prop in book) {
        console.log(`${prop}:${book[prop]}`);
    }
}