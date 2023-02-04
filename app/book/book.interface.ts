import { IAuthor } from "../author/author.interface";
import { IPublisher } from "../publisher/publisher.interface";

// TODO: přidat property code typu string, které se naplní při vytvoření unikátním uuid (v bookService.create)

export interface IBook {
  name: string;
  author: IAuthor;
  publisher?: IPublisher;
}
