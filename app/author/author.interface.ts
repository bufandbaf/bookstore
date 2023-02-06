// TODO: přidat do IAuthor unikátní code a rozdělit interfaces na IAuthorView a IAuthorCreate

export interface IAuthorView {
  code: string;
  firstName: string;
  lastName: string;
}

export interface IAuthorCreate
  extends Pick<IAuthorView, "firstName" | "lastName"> {}
