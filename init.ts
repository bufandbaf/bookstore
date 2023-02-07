import { BookService } from "./app/book/book.service";
import { AuthorService } from "./app/author/author.service";
import { Genre } from "./app/book/genre.enum";

// TODO: vytvoř složku /tests, která bude obsahovat různé testy - obdoba našich e2e testů. tento soubor přejmenuj např. na "book-delete.test.ts" a uprav tak, aby testoval kroky vytvoření a následné smazání knihy. Spouštět se bude pomocí příkazu "nodemon ./tests/book-delete.test.ts"

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

const animalFarm = bookService.create({
  name: "Animal Farm",
  author: georgeOrwell,
  genre: Genre.Drama,
});

const nineteenEightyFour = bookService.create({
  name: "1984",
  author: georgeOrwell,
  genre: Genre.ScienceFiction,
});

const aroundTheWorldInEightyDays = bookService.create({
  name: "Cesta kolem světa za 80 dnů",
  author: julesVerne,
  genre: Genre.Adventure,
});

const quoVadis = bookService.create({
  name: "Quo Vadis",
  author: henrykSienkiewicz,
  genre: Genre.History,
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

bookService.delete(animalFarm.bookCode);

// Complete list of books in catalogue
console.log(bookService.list());

console.log(
  `Book '${quoVadis.name}' has index number ${bookService.getIndex(
    quoVadis.bookCode
  )}.`
);
