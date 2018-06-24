let LibraryUi = {
  renderHTML: function() {
    this.addTemplate();
  },
  addTemplate: function() {
    var bookHTML = '<tr id="card'
    bookHTML += library.bookIndex;
    bookHTML += '">'
    bookHTML += '<td>';
    bookHTML += library.books[library.bookIndex].title;
    bookHTML += '</td>';
    bookHTML += '<td>';
    bookHTML += library.books[library.bookIndex].author;
    bookHTML += '</td>';
    bookHTML += '<td>';
    bookHTML += library.books[library.bookIndex].pages;
    bookHTML += '</td>';
    bookHTML += '<td>';
    bookHTML += '<div class="';
    if (library.books[library.bookIndex].read === false) {
      bookHTML += 'read';
    } else {
      bookHTML += 'un-read';
    };
    bookHTML += '"></div>';
    bookHTML += '</td>';
    bookHTML += '<td>';
    bookHTML += '<button class="delete" onclick="deleteBook(';
    bookHTML += library.bookIndex;
    bookHTML += ')">x</button>';
    bookHTML += '</td>';
    bookHTML += '</tr>';

    document.getElementById('newBooks').innerHTML += bookHTML;
  }
}
