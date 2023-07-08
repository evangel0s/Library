let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
   
}
Book.prototype.info = function () {
   this.read = !this.read;
   
}
function info(index) {
  myLibrary[index].info();
  render();
}

 

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <div class='card-header'>
      <h3 class='title'>${book.title}</h3>
      <h5 class='author'>by ${book.author}</h5>
     <p>${book.pages} pages</p>
     
     <p class='read-status  '>${book.read ? "Read" : "Not read Yet"}</p>
     <button class='toggle-read-btn' onclick='info(${i})'>Toggle Read</button>
     
     <button class='remove-btn ' onclick='removeBook(${i})'>Remove</button>
     
    </div>`;

    libraryEl.appendChild(bookEl);
  }
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
   
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
 newBookForm.style.display = "block";
 

  document.querySelector("#new-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
  newBookForm.onsubmit = function(event){
    createCard(event);
  }
  function createCard(event){
    event.target.style.display = 'none';
  }
});