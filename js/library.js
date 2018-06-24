function Library() {
  this.books = [];
  this.bookIndex = 1;
}

Library.prototype.add = function() {
  let read = document.getElementById("bookRead").checked;
  let book = new Book(title.value, author.value, pages.value, read);
  this.books.push(book);
}
