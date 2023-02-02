import { IAuthor } from "./author.interface";


export class AuthorService {
    constructor(){
        this.authors = [];
    }
    private authors: IAuthor[];
    create(author: IAuthor) {
        this.authors.push(author);
        return author;
    }

    list() {
        return this.authors;
    }
}