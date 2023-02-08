import { IAuthorView } from '../app/author/author.interface';
import {AuthorService} from '../app/author/author.service';
import { IBookCreate } from '../app/book/book.interface';
import { BookService } from '../app/book/book.service';
import { Genre } from '../app/book/genre.enum';
import {describe, expect, expectObjectContains} from './utils/jest-like-expect';

// Test interfaces
interface IBookExpected extends Omit<IBookCreate, 'authorCode'> {
  author?: Partial<IAuthorView>,
}

// Service Injection
const authorService = AuthorService.getInstance();
const bookService = BookService.getInstance();

// Arrange
const expectedBook: IBookExpected = {
  name: 'Seven',
  genre: Genre.Drama,
  author: {
    firstName: 'John',
    lastName: 'Orwell',
  }
}

// Act
const author = authorService.create({
  firstName: 'John',
  lastName: 'Doe',
});

bookService.create({
  authorCode: author.code,
  genre: expectedBook.genre,
  name: expectedBook.name,
  publisher: expectedBook.publisher,
});
const bookWithoutAuthor = bookService.findByName(expectedBook.name, author.code);
const bookWithAuthor = bookService.findByName(expectedBook.name, author.code, {includeAuthor: true});

// Assert
describe('Testing books', () => {

  describe('Book name', () => {
    expect(bookWithoutAuthor.name, expectedBook.name);
  });

  describe('Book object', () => {
    expectObjectContains(bookWithoutAuthor?.author, undefined, {showSummary: true});
    expectObjectContains(bookWithAuthor.author, expectedBook.author, {showSummary: true});
  })

});
