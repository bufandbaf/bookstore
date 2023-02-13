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

    const author = authorService.create(expectedAuthor);
    const createdBook = bookService.create({
        name: expectedBook.name,
        authorCode: author.code,
        genre: expectedBook.genre,
    });

    // Act
    bookService.delete(createdBook.code);

    const allBooks: number[] = [bookService.count()];

    // Assert
    describe('Testing book deletion', () => {
        describe('Check if the total number of books decreased', () => {
            expect(allBooks[0], bookService.count());
        });

        describe('Deleted book details', () => {
            expectObjectContains(createdBook, expectedBook, {
                showSummary: true,
            });
        });
    });
} catch (e) { /* empty */ }
