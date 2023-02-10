import { v1 as uuidv1 } from "uuid";

import { AuthorService } from "../author/author.service";
import { IBookView, IBookCreate } from "./book.interface";

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
  private authorService: AuthorService = AuthorService.getInstance();

  // Local book memory-only storage
  private books: IBookView[] = [];

  // Public methods
  create(bookToCreate: IBookCreate) {
    const book: IBookView = {
      code: uuidv1(),
      authorCode: bookToCreate.authorCode,
      name: bookToCreate.name,
      genre: bookToCreate.genre,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.books.push(book);
    return book;
  }

  /**
   *
   * @returns list of all books in the library
   */
  list() {
    return this.books;
  }

  count() {
    return this.books.length;
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
  listByAuthor(authorCode: string) {
    return this.books.filter((book) => book.authorCode === authorCode);
  }
  /**
   *
   * @param name book's name
   * @returns list of books with the given name
   */
  filterByName(name: string): IBookView[] {
    return this.books.filter((book) => {
      return book.name.toLowerCase() === name.toLowerCase();
    });
  }
  findByCode(code: string): IBookView {
    const book = this.books.find((b) => b.code === code);
    if (!book) throw new Error(`Book with #${code} not found.`);
    return book;
  }
  findByName(
    bookName: string,
    authorCode: string,
    options?: {includeAuthor?: boolean}
  ): IBookView | undefined {
    const author = options?.includeAuthor
    ? this.authorService.findByCode(authorCode)
    : undefined;
    const book = this.books.find(
      (b) => b.name.toLowerCase() === bookName.toLowerCase() &&
      b.authorCode === authorCode);
      if (!book) return undefined;
    return {...book, author};
  }
  getIndex(code: string) {
    return this.books.findIndex((b) => b.code === code);
  }
  delete(code: string) {
    const bookIndex = this.getIndex(code);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      return true;
    }
    return false;
  }
}
