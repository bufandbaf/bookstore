// TODO: přidat do IAuthor unikátní code a rozdělit interfaces na IAuthorView a IAuthorCreate

export interface IAuthorView {
  firstName: string;
  lastName: string;
}

export interface IAuthorCreate extends Pick<IAuthorView, "lastName"> {}
