import { AuthorService } from '../app/author/author.service';
import { BookService } from '../app/book/book.service';
import { Genre } from '../app/book/genre.enum';
import { authorCreateSamples } from './setters/author.setter';
import { bookCreateSamples } from './setters/book.setter';
import { describe, expect, expectObjectContains } from './utils/jest-like-expect';

try {
    // Service Injection
    const authorService = AuthorService.getInstance();
    const bookService = BookService.getInstance();

    // Arrange
    const expectedBook = bookCreateSamples.animalFarm.name;
    const expectedAuthor = authorCreateSamples.georgeOrwell;

    // Act
    const author = authorService.create(expectedAuthor);
    const book1 = bookService.create({
        name: expectedBook,
        authorCode: author.code,
        genre: expectedBook as Genre,
    });
    const book2 = bookService.create({
        name: '1984',
        authorCode: author.code,
        genre: 'SCIENCE FICTION' as Genre,
    });

    const filteredBooks = bookService.filterByName(expectedBook);

    // Assert
    describe('Testing book filtering by name', () => {
        describe('Check if the correct book was filtered.', () => {
            expect(filteredBooks.length, 1);
            expect(filteredBooks[0].name, expectedBook);
        });

        describe('Filtered book details', () => {
            expectObjectContains(filteredBooks[0], book1, {
                showSummary: true,
            });
        });
    });

// eslint-disable-next-line no-empty
} catch (e) {}
