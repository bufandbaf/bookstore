import { AuthorService } from "../app/author/author.service";
import { BookService } from "../app/book/book.service";
import { Genre } from "../app/book/genre.enum";

// Authors list
const authorService = AuthorService.getInstance();

const georgeOrwell = authorService.create({
  firstName: "George",
  lastName: "Orwell",
});

// Books list
const bookService = BookService.getInstance();

const animalFarm = bookService.create({
  name: "Animal Farm",
  authorCode: georgeOrwell.firstName + georgeOrwell.lastName,
  genre: Genre.Drama,
});

bookService.create({
  name: "1984",
  authorCode: georgeOrwell.firstName + georgeOrwell.lastName,
  genre: Genre.ScienceFiction,
});

console.clear();
console.log("Books before delete:", bookService.list());
bookService.delete(animalFarm.code);
console.log("Books after delete:", bookService.list());
