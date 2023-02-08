import { IAuthorView } from '../app/author/author.interface';
import {AuthorService} from '../app/author/author.service';
import { IBookCreate } from '../app/book/book.interface';
import { BookService } from '../app/book/book.service';
import { Genre } from '../app/book/genre.enum';
import {expect, expectObjectContains} from './utils/jest-like-expect';

// Service Injection
const authorService = AuthorService.getInstance();
const bookService = BookService.getInstance();

// Arrange
const expectedAuthor: Pick<IAuthorView, 'firstName' | 'lastName'> & {nesmysl: string} = {
  firstName: "John",
  lastName: "Doe",
  nesmysl: 'abc',
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
console.clear();
let foundAnyError: boolean = false;
if (!expect('book name', book.name, expectedBook.name)) foundAnyError = true;
if (!expectObjectContains(book?.author, expectedAuthor)) foundAnyError = true;
if (!foundAnyError)
  console.log('Test for book creation was successfully provided.');