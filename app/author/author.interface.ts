export interface IAuthorView {
  code: string;
  firstName: string;
  lastName: string;
}

export interface IAuthorCreate
  extends Pick<IAuthorView, "firstName" | "lastName"> {}
