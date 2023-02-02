import { IAuthor } from '../author/author.interface';
import { IBook } from './book.interface';

export class BookService {
  // SINGLETON ---------------------- BEGIN
  private static instance: BookService;
  private constructor() { }
  public static getInstance(): BookService {
    if (!BookService.instance) {
      BookService.instance = new BookService();
    }
    return BookService.instance;
  }
  // SINGLETON ---------------------- END

  // Service Injection
  private books: IBook[] = [];

  create(book: IBook) {
    this.books.push(book);
    return book;
  }

  // TODO: add delete() method that returns empty object

  /**
   * 
   * @returns list of all books in the library
   */
  list() {
    return this.books;
  }

  /**
   * 
   * @param asc set sorting order where TRUE is ascending, FALSE is descending
   * @returns list of sorted books
   */
  sort(asc: boolean) {
    this.books.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return asc ? -1 : 1;
      }
      if (nameA > nameB) {
        return asc ? 1 : -1;
      }
      // names must be equal
      return 0;
    });
    return this.books;
  }

  /**
   * 
   * @param author author's name or full author object - both case insensitive
   * @returns list of author's books
   */
  listByAuthor(author: IAuthor | string) {
    return this.books.filter((book) => {
      if (typeof author === 'string') {
        return book.author.firstName.toLowerCase() === author.toLowerCase() || book.author.lastName.toLowerCase() === author.toLowerCase()
      } else {
        return book.author.firstName.toLowerCase() === author.firstName.toLowerCase() && book.author.lastName.toLowerCase() === author.lastName.toLowerCase()
      }
    }

    );
  }
}