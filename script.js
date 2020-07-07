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
  return false;
}

//Get form submit
document.getElementById("submit").addEventListener("click", () => {
  addBookToLibrary();
  newBookModal.style.display = "none";
  document.getElementById("newBook").reset();
});


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