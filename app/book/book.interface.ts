import { IAuthorView } from "../author/author.interface";
import { IPublisher } from "../publisher/publisher.interface";
import { Genre } from "./genre.enum";
import { ITimeStamp } from '../_base/timestamp.interface';

export interface IBookView extends ITimeStamp {
  code: string;
  name: string;
  /**
   * This is like a foreign key in db architecture
   */
  authorCode: string;
  /**
   * This is optional Author entity included in the Book entity like sql-join table
   */
  author?: IAuthorView;
  publisher?: IPublisher;
  genre: Genre;
}

export interface IBookCreate
  extends Pick<IBookView, 'name' | 'publisher' | 'genre' | 'authorCode'> {
}

