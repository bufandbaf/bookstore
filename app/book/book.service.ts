import {IBook} from './book.interface';

export class BookService {
    constructor(){
        this.books = [];
    }
    private books: IBook[];
    create(book: IBook) {
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
}