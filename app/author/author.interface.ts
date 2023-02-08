import { ITimeStamp } from "../_base/timestamp.interface";

export interface IAuthorView extends ITimeStamp {
  code: string;
  firstName: string;
  lastName: string;
}

export interface IAuthorCreate
  extends Pick<IAuthorView, "firstName" | "lastName"> {}
