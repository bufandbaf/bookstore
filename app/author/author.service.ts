import { v4 as uuidv4 } from 'uuid';
import { IAuthorView, IAuthorCreate } from './author.interface';

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

    // Local author memory-only storage
    private authors: IAuthorView[] = [];

    create(authorToCreate: IAuthorCreate) {
        const author: IAuthorView = {
            code: uuidv4(),
            firstName: authorToCreate.firstName,
            lastName: authorToCreate.lastName,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.authors.push(author);
        return author;
    }

    list() {
        return this.authors;
    }

    deleteAuthor(author: IAuthorView) {
        this.authors = this.authors.filter(
            (a) =>
                a.firstName.toLowerCase() !== author.firstName.toLowerCase() &&
        a.lastName.toLowerCase() !== author.lastName.toLowerCase()
        );
        return {};
    }

    findByCode(code: string) {
        return this.authors.find((author) => author.code === code);
    }
    findByName(firstName: string, lastName: string) {
        return this.authors.find((author) =>
            author.firstName.toLowerCase() === firstName.toLowerCase() &&
      author.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }
}
