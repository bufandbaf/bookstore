import { BookService } from "./app/book/book.service";
import { AuthorService } from "./app/author/author.service";

const authorService = AuthorService.getInstance();
const georgeOrwel = authorService.create({
  firstName: "George",
  lastName: "Orwell",
});

const bookService = BookService.getInstance();
bookService.create({
  name: "Animal Farm",
  author: georgeOrwel,
});

bookService.create({
  name: "1984",
  author: georgeOrwel,
});

const julesVerne = authorService.create({
  firstName: "Jules",
  lastName: "Verne",
});

bookService.create({
  author: julesVerne,
  name: "Cesta kolem světa za 80 dnů",
});

console.clear();
// console.log("not sorted:", bookService.list());
bookService.sort(false);
// console.log("sorted descending:", bookService.list());
bookService.sort(true);
// console.log("sorted ascending:", bookService.list());

console.log(
  "Authors",
  authorService.list(),
);

console.log(
  bookService.listByAuthor({firstName: 'george', lastName: 'orwell'})
)

// zjednodušená forma bez return
// console.log('list book names', bookService.list().map((book) => ({name: book.name}) ));
