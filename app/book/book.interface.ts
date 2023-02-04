import { IAuthor } from "../author/author.interface";
import { IPublisher } from "../publisher/publisher.interface";

// TODO: přidat propery code (string), které bude obaahovat unikátní uuid

export interface IBook {
  name: string;
  author: IAuthor;
  publisher?: IPublisher;
}
