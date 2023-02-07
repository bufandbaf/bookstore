export interface IAuthorView {
  authorCode: string;
  firstName: string;
  lastName: string;
}

export interface IAuthorCreate
  extends Pick<IAuthorView, "firstName" | "lastName"> {}
