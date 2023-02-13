import { ITimeStamp } from '../_base/timestamp.interface';

export interface IAuthorView extends ITimeStamp {
  code: string;
  firstName: string;
  lastName: string;
}

export type IAuthorCreate = Pick<IAuthorView, 'firstName' | 'lastName'>;
