import {IAuthor} from '../author/author.interface';
import {IPublisher} from '../publisher/publisher.interface';

export interface IBook {
    name: string;
    author: IAuthor;
    publisher?: IPublisher;
}