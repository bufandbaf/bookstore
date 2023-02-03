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
  name: "Animal Farm",
  author: georgeOrwell,
});

bookService.create({
  name: "1984",
  author: georgeOrwell,
});

bookService.create({
  name: "Cesta kolem světa za 80 dnů",
  author: julesVerne,
});

bookService.create({
  name: "Quo Vadis",
  author: henrykSienkiewicz,
});

// Sorting options
console.clear();
// console.log("not sorted:", bookService.list());
bookService.sort(false);
// console.log("sorted descending:", bookService.list());
bookService.sort(true);
// console.log("sorted ascending:", bookService.list());

// Author-based search
// console.log("Authors", authorService.list());

// Author-specified search
// console.log(bookService.listByAuthor({ firstName: "george", lastName: "orwell" })

// Book-based search
// console.log("Books", bookService.list());

// Book name-specified search
// console.log(bookService.listByBookName("Quo Vadis"));

// Simplified form without return
// console.log('list book names', bookService.list().map((book) => ({name: book.name}) ));
