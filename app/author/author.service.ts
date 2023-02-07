import { v4 as uuidv4 } from "uuid";

import { BookService } from "../book/book.service";
import { IAuthorView, IAuthorCreate } from "./author.interface";

export class AuthorService {
  // SINGLETON ---------------------- BEGIN
  private static instance: AuthorService;
  private constructor() {}
  public static getInstance(): AuthorService {
    if (!AuthorService.instance) {
      AuthorService.instance = new AuthorService();
    }
    return AuthorService.instance;
  }
  // SINGLETON ---------------------- END

  // Service Injection
  private bookService: BookService = BookService.getInstance();

  // Local author storage
  private authors: IAuthorCreate[] = [];

  create(authorToCreate: IAuthorCreate) {
    const author: IAuthorView = {
      authorCode: uuidv4(),
      firstName: authorToCreate.firstName,
      lastName: authorToCreate.lastName,
    };
    this.authors.push(author);
    return author;
  }

  list() {
    return this.authors;
  }

  listBooks(searchName: string) {
    return this.bookService.listByAuthor(searchName);
  }
  deleteAuthor(author: IAuthorView) {
    this.authors = this.authors.filter(
      (a) =>
        a.firstName.toLowerCase() !== author.firstName.toLowerCase() &&
        a.lastName.toLowerCase() !== author.lastName.toLowerCase()
    );
    return {};
  }
}
