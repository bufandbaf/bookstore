import { BookService } from "../app/book/book.service";
import { IAuthorView } from "../app/author/author.interface";
import { AuthorService } from "../app/author/author.service";
import { bookCreateSamples } from "./setters/book.setter";
import { authorCreateSamples } from "./setters/author.setter";
import { describe } from "./utils/jest-like-expect";

try {
  // Service Injection
  const bookService = BookService.getInstance();
  const authorService = AuthorService.getInstance();

  // Arrange
  const expectedBook = bookCreateSamples.animalFarm;
  const expectedAuthor = authorCreateSamples.georgeOrwell;

  // Act
  const author = authorService.create(expectedAuthor);

  bookService.create({
    name: expectedBook.name,
    authorCode: author.code,
    genre: expectedBook.genre,
  });

  const deleteBook = bookService.count();

  // Assert
  describe("Testing book deletion", () => {
    describe();
  });
} catch (e) {}
