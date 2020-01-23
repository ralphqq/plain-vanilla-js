const getTheTitles = function(bookArray) {
  let bookTitles = [];
  bookArray.forEach(function(book) {
    bookTitles.push(book.title);
  });
  return bookTitles;
}

module.exports = getTheTitles;
