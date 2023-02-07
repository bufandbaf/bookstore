import { IAuthorView } from "../author/author.interface";
import { IPublisher } from "../publisher/publisher.interface";
import { Genre } from "./genre.enum";

export interface IBookView {
  code: string;
  name: string;
  author: IAuthorView;
  publisher?: IPublisher;
  genre: Genre;
}

export interface IBookCreate
  extends Pick<IBookView, "name" | "author" | "publisher" | "genre"> {}
