import { v1 as uuidv1 } from "uuid";

import { IAuthor } from "../author/author.interface";
import { IBookView, IBookCreate } from "./book.interface";

export class BookService {
  // SINGLETON ---------------------- BEGIN
  private static instance: BookService;
  private constructor() {}
  public static getInstance(): BookService {
    if (!BookService.instance) {
      BookService.instance = new BookService();
    }
    return BookService.instance;
  }
  // SINGLETON ---------------------- END

  private books: IBookView[] = [];

  create(bookToCreate: IBookCreate) {
    const book: IBookView = {
      author: bookToCreate.author,
      code: uuidv1(),
      name: bookToCreate.name,
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
      if (typeof author === "string") {
        return (
          book.author.firstName.toLowerCase() === author.toLowerCase() ||
          book.author.lastName.toLowerCase() === author.toLowerCase()
        );
      } else {
        return (
          book.author.firstName.toLowerCase() ===
            author.firstName.toLowerCase() &&
          book.author.lastName.toLowerCase() === author.lastName.toLowerCase()
        );
      }
    });
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
