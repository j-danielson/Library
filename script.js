
/*var mainDiv = document.getElementById("libraryCards");
var resetBtn = document.createElement("button");
resetBtn.addEventListener("click", function() {
  localStorage.clear();
  myLibrary = [];
})
mainDiv.appendChild(resetBtn);*/

var myLibrary = [];



console.log("checking method");
pullStorage();

//Get form submit
document.getElementById("submit").addEventListener("click", () => {
  addBookToLibrary();
  newBookModal.style.display = "none";
  document.getElementById("newBook").reset();
  localStorage.setItem('savedLibrary', JSON.stringify(myLibrary));
});

//FUNCTIONS

function pullStorage(){
  if(!localStorage.getItem('savedLibrary')) {
    console.log("found nothing");
  }
  else 
  { 
    console.log("found something");
    retrievedObject = localStorage.getItem('savedLibrary');
    myLibrary = JSON.parse(retrievedObject);
    myLibrary.forEach(generateBookCard);
  }
}

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

function removeBook(i) {
  var deletedBook = document.getElementById("" + i.title.split(" ").join("").toLowerCase());
  deletedBook.remove();
  myLibrary.splice(myLibrary.indexOf(i), 1);
}

function readBook(i) {
  i.read = true;
  var elementParent = document.getElementById("readBtn").parentNode;
  var elementButton = document.getElementById("readBtn");
  elementButton.remove();
  const bookFinished = document.createElement("p");
  bookFinished.textContent = "Finished";
  elementParent.appendChild(bookFinished);
}

 function generateBookCard(book) {
  var bookCheck = document.getElementById("" + book.title.split(" ").join("").toLowerCase());

  if (bookCheck != null) {
    return
  }
  else {

  const card = document.createElement("div");
  card.classList.add("bookCard");
  card.setAttribute("id", "" + book.title.split(" ").join("").toLowerCase());
  console.log(document.classList);
  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody")
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("closeCardBtn");
  closeBtn.addEventListener("click", () => {
    removeBook(book);
  })
  closeBtn.innerHTML = "&times;";
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = "Author: " + book.author;
  const bookPages = document.createElement("p");
  bookPages.textContent = "Pages: " + book.pages;

  cardBody.appendChild(closeBtn)
  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookPages);
  if (book.read == true){
    const bookFinished = document.createElement("p");
    bookFinished.textContent = "Finished";
    cardBody.appendChild(bookFinished);
  }
  else {
    const readBtn = document.createElement("button");
    readBtn.setAttribute("id", "readBtn");
    readBtn.innerHTML = "Finished?";
    readBtn.addEventListener("click", () => {
      readBook(book);
    })
    cardBody.appendChild(readBtn);
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

/*features to work on
refuse book if in array
make only cardContainer scrollable
make pretty{
  font size
  red border around read cards?
  card sizses and spacing
}*/