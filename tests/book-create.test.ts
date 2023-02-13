import { AuthorService } from '../app/author/author.service';
import { BookService } from '../app/book/book.service';
import {
    describe,
    expect,
    expectObjectContains,
} from './utils/jest-like-expect';
import { bookCreateSamples } from './setters/book.setter';
import { authorCreateSamples } from './setters/author.setter';

try {
    // Service Injection
    const authorService = AuthorService.getInstance();
    const bookService = BookService.getInstance();

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

    const allBooks = bookService.list();

    // Assert
    describe('Testing book creation', () => {
        describe('Check if the total number is ok.', () => {
            expect(allBooks.length, 1);
        });

        describe('New book details', () => {
            expectObjectContains(allBooks[0], expectedBook, {
                showSummary: true,
            });
        });
    });
// eslint-disable-next-line no-empty
} catch (e) {}
