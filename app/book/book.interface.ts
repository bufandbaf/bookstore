import { IAuthorView } from "../author/author.interface";
import { IPublisher } from "../publisher/publisher.interface";
import { Genre } from "./genre.enum";
import { ITimeStamp } from '../_base/timestamp.interface';

export interface IBookView extends ITimeStamp {
  code: string;
  name: string;
  authorCode: string;
  author?: IAuthorView;
  publisher?: IPublisher;
  genre: Genre;
}

export interface IBookCreate
  extends Pick<IBookView, 'name' | 'publisher' | 'genre' | 'authorCode'> {
}

