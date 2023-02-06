import { IAuthor } from "../author/author.interface";
import { IPublisher } from "../publisher/publisher.interface";

export interface IBookView {
  code: string;
  name: string;
  author: IAuthor;
  publisher?: IPublisher;
}

export interface IBookCreate extends Pick<IBookView, "name" | "author"> {}

// class whatIsInTheInterface implements IBookCreate {}
