import {AuthorService} from '../app/author/author.service';
import { BookService } from '../app/book/book.service';
import {describe, expectObjectContains} from './utils/jest-like-expect';
import {bookCreateSamples} from './setters/book.setter';
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

    // Testing that book has not property author
    const bookWithoutAuthor = bookService.findByName(
        expectedBook.name, author.code,
        {
            includeAuthor: false,
        }
    );
  
    // Testing that book has property author
    const bookWithAuthor = bookService.findByName(
        expectedBook.name, author.code,
        {
            includeAuthor: true
        }
    );
    
    
    // Assert
    describe('Testing books with/without author', () => {
    
        console.log('book (without author):', bookWithoutAuthor);
        console.log('book (with author):', bookWithAuthor);
      
        describe('Book without author', () => {
            expectObjectContains(bookWithoutAuthor?.author, undefined, {
                showSummary: true
            });
        });
    
        describe('Book with author', () => {
            expectObjectContains(bookWithAuthor?.author, expectedAuthor, {
                showSummary: true
            });
        });
    
    });

// eslint-disable-next-line no-empty
} catch(e) { }