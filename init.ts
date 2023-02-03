import { BookService } from "./app/book/book.service";
import { AuthorService } from "./app/author/author.service";

// Authors list
const authorService = AuthorService.getInstance();

const georgeOrwell = authorService.create({
  firstName: "George",
  lastName: "Orwell",
});

const julesVerne = authorService.create({
  firstName: "Jules",
  lastName: "Verne",
});

const henrykSienkiewicz = authorService.create({
  firstName: "Henryk",
  lastName: "Sienkiewicz",
});

// Books list
const bookService = BookService.getInstance();

bookService.create({
  bookName: "Animal Farm",
  author: georgeOrwell,
});

bookService.create({
  bookName: "1984",
  author: georgeOrwell,
});

bookService.create({
  bookName: "Cesta kolem světa za 80 dnů",
  author: julesVerne,
});

bookService.create({
  bookName: "Quo Vadis",
  author: henrykSienkiewicz,
});

// Sorting options
console.clear();
// console.log("not sorted:", bookService.list());
bookService.sort(false);
// console.log("sorted descending:", bookService.list());
bookService.sort(true);
// console.log("sorted ascending:", bookService.list());

// Author-general search
// console.log("Authors", authorService.list());

// Author-specific search
// console.log(bookService.listByAuthor({ firstName: "george", lastName: "orwell" })

// Book name-general search
// console.log("Books", bookService.list());

// Book name-specific search
// console.log(bookService.listByBookName("Quo Vadis"));

// Simplified form without return
// console.log('list book names', bookService.list().map((book) => ({name: book.name}) ));
