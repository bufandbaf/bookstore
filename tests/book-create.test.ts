import { IAuthorView } from '../app/author/author.interface';
import {AuthorService} from '../app/author/author.service';
import { IBookCreate } from '../app/book/book.interface';
import { BookService } from '../app/book/book.service';
import { Genre } from '../app/book/genre.enum';
import {describe, expect, expectObjectContains} from './utils/jest-like-expect';

// Service Injection
const authorService = AuthorService.getInstance();
const bookService = BookService.getInstance();

// Arrange
const expectedAuthor: Pick<IAuthorView, 'firstName' | 'lastName'> = {
  firstName: "John",
  lastName: "Doe",
}
const expectedBook: Pick<IBookCreate, 'name' | 'genre' | 'publisher'> = {
  name: "Seven",
  genre: Genre.Drama,
}

// Act
const author = authorService.create({
  firstName: expectedAuthor.firstName,
  lastName: expectedAuthor.lastName,
});
bookService.create({
  authorCode: author.code,
  genre: expectedBook.genre,
  name: expectedBook.name,
  publisher: expectedBook.publisher,
});
const book = bookService.findByName(expectedBook.name, author.code);

// Assert
describe('Testing books', () => {

  describe('Book name', () => {
    expect(book.name, expectedBook.name);
  });

  describe('Book object', () => {
    expectObjectContains(book?.author, expectedAuthor, {showSummary: true});
  })

});
