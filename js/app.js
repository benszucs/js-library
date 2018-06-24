//#####################################
// Application
//#####################################

// Create Library
var library = new Library();

// target the fields of the new book form
let title = document.getElementById("bookTitle");
let author = document.getElementById("bookAuthor");
let pages = document.getElementById("bookPages");
library.add();

/* on addInfo button click add the user inputs to myLibrary */
document.getElementById("addInfo").addEventListener("click", function() {
  library.add();
  LibraryUi.renderHTML();
  library.bookIndex++;
  modal.style.display = "none";
  title.value = "";
  author.value = "";
  pages.value = "";
});

// add button to remove an element
// the method should be part of the Library UI because we are removing the whole row of the targeted book
// document.querySelectorAll("[data-foo='1']")
// not an ideal solution.... it is what it is
function deleteBook(id) {
  let card = document.getElementById("card" + id);
  card.remove();
}

// toggle read/un-read
