let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(){
  const title = document.getElementById("bTitle").value;
  const author = document.getElementById("bAuthor").value;
  const pages = document.getElementById("bPages").value;
  const read = document.getElementById("bRead").checked;
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
  myLibrary.forEach(generateBookCard);
  return false;
}

//Get form submit
document.getElementById("submit").addEventListener("click", () => {
  addBookToLibrary();
  newBookModal.style.display = "none";
  document.getElementById("newBook").reset();
});

 function generateBookCard(book) {
  var bookCheck = document.getElementsByClassName("" + book.title.split(" ").join("").toLowerCase());

  if (bookCheck.length > 0) {
    return
  }
  else {

  const card = document.createElement("div");
  card.classList.add("bookCard", "" + book.title.split(" ").join("").toLowerCase());

  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody")
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = "Author: " + book.author;
  const bookPages = document.createElement("p");
  bookPages.textContent = "Pages: " + book.pages;

  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookPages);
  if (book.read == true){
    const bookFinished = document.createElement("p");
    bookFinished.textContent = "Finished";
    cardBody.appendChild(bookFinished);
  }

  card.appendChild(cardBody)
  document.getElementById("libraryCards").appendChild(card);
  }
 }


//modal popup
var newBookModal = document.getElementById("newBookModal");
var newBookBtn = document.getElementById("newBookBtn");
var closeBtn = document.getElementsByClassName("close")[0];

newBookBtn.onclick = function() {
  newBookModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  newBookModal.style.display = "none";
  document.getElementById("newBook").reset();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == newBookModal) {
    newBookModal.style.display = "none";
    document.getElementById("newBook").reset();
  }
}


/*Checklist of features
New Book Button
Form For New Book Data
Add "Cards" for Book Data
Store Data Locally
*/